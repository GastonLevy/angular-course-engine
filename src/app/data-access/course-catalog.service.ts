import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseCatalog } from '../shared/models/course-catalog.model';

export interface CourseCatalogIndexItem {
  key: string;
  label: string;
  file: string;
}

export interface CourseCatalogIndex {
  courses: CourseCatalogIndexItem[];
}

@Injectable({ providedIn: 'root' })
export class CourseCatalogService {
  private readonly http = inject(HttpClient);

  private readonly _catalog = signal<CourseCatalog | null>(null);
  readonly catalog = this._catalog.asReadonly();

  private readonly _courses = signal<CourseCatalogIndexItem[]>([]);
  readonly courses = this._courses.asReadonly();

  private readonly _currentCourseKey = signal<string | null>(null);
  readonly currentCourseKey = this._currentCourseKey.asReadonly();

  constructor() {
    this.loadCatalogIndex();
  }

  private loadCatalogIndex(): void {
    this.http.get<CourseCatalogIndex>('assets/course-catalog-index.json').subscribe({
      next: (index) => {
        this._courses.set(index.courses);

        const firstCourse = index.courses[0];

        if (firstCourse) {
          this.loadCourse(firstCourse.key);
        }
      },
      error: (err) => {
        console.error('Error loading course catalog index', err);
        this._courses.set([]);
        this._catalog.set(null);
        this._currentCourseKey.set(null);
      },
    });
  }

  loadCourse(courseKey: string): void {
    const selectedCourse = this._courses().find((course) => course.key === courseKey);

    if (!selectedCourse) {
      console.error(`Course with key "${courseKey}" was not found in catalog index.`);
      return;
    }

    this.http.get<CourseCatalog>(selectedCourse.file).subscribe({
      next: (catalog) => {
        this._currentCourseKey.set(courseKey);
        this._catalog.set(catalog);
      },
      error: (err) => {
        console.error(`Error loading course "${courseKey}"`, err);
        this._catalog.set(null);
      },
    });
  }

  rotateConfig(): void {
    const courses = this._courses();
    const currentKey = this._currentCourseKey();

    if (!courses.length) {
      return;
    }

    const currentIndex = courses.findIndex((course) => course.key === currentKey);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % courses.length;

    this.loadCourse(courses[nextIndex].key);
  }
}
