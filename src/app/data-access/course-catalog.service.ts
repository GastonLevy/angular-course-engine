import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseCatalog } from '../shared/models/course-catalog.model';

@Injectable({ providedIn: 'root' })
export class CourseCatalogService {
  private http = inject(HttpClient);

  private readonly _catalog = signal<CourseCatalog | null>(null);
  readonly catalog = this._catalog.asReadonly();

  private readonly presets = [
    'course-fullstack-angular-symfony',
    'course-frontend-angular',
    'course-backend-symfony-api',
  ] as const;

  private currentIndex = signal(0);

  constructor() {
    this.loadCurrentPreset();
  }

  private loadCurrentPreset() {
    const key = this.presets[this.currentIndex()];
    const url = `assets/${key}.json`;

    this.http.get<CourseCatalog>(url).subscribe({
      next: (cfg) => this._catalog.set(cfg),
      error: (err) => {
        console.error('Error loading catalog', err);
        this._catalog.set(null);
      },
    });
  }

  rotateConfig(): void {
    const nextIndex = (this.currentIndex() + 1) % this.presets.length;
    this.currentIndex.set(nextIndex);
    this.loadCurrentPreset();
  }
}
