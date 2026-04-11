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

  private readonly _isLoading = signal(false);
  readonly isLoading = this._isLoading.asReadonly();

  private readonly _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  constructor() {
    this.loadCatalogIndex();
  }

  private loadCatalogIndex(): void {
    this._isLoading.set(true);
    this._error.set(null);

    this.http.get<CourseCatalogIndex>('assets/course-catalog-index.json').subscribe({
      next: (index) => {
        this._courses.set(index.courses);

        const firstCourse = index.courses[0];

        if (firstCourse) {
          this.loadCourse(firstCourse.key);
          return;
        }

        this._catalog.set(null);
        this._currentCourseKey.set(null);
        this._error.set('No courses were found in the catalog index.');
        this._isLoading.set(false);
      },
      error: () => {
        this._courses.set([]);
        this._catalog.set(null);
        this._currentCourseKey.set(null);
        this._error.set('Failed to load the course catalog index.');
        this._isLoading.set(false);
      },
    });
  }

  loadCourse(courseKey: string): void {
    const selectedCourse = this._courses().find((course) => course.key === courseKey);

    if (!selectedCourse) {
      this._catalog.set(null);
      this._currentCourseKey.set(null);
      this._error.set(`Course with key "${courseKey}" was not found.`);
      return;
    }

    this._isLoading.set(true);
    this._error.set(null);

    this.http.get<CourseCatalog>(selectedCourse.file).subscribe({
      next: (catalog) => {
        this._currentCourseKey.set(courseKey);
        this._catalog.set(catalog);
        this._isLoading.set(false);
      },
      error: () => {
        this._catalog.set(null);
        this._currentCourseKey.set(null);
        this._error.set(`Failed to load the course "${courseKey}".`);
        this._isLoading.set(false);
      },
    });
  }

  rotateConfig(): void {
    const courses = this._courses();
    const currentKey = this._currentCourseKey();

    if (!courses.length || this._isLoading()) {
      return;
    }

    const currentIndex = courses.findIndex((course) => course.key === currentKey);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % courses.length;

    this.loadCourse(courses[nextIndex].key);
  }
}
