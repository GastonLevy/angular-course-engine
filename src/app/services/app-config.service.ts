// src/app/config/app-config.service.ts
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app-config.model';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  private http = inject(HttpClient);

  private readonly _config = signal<AppConfig | null>(null);
  readonly config = this._config.asReadonly();

  // 👇 nombres exactos de los archivos SIN el .json
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

    this.http.get<AppConfig>(url).subscribe({
      next: (cfg) => this._config.set(cfg),
      error: (err) => {
        console.error('Error loading config', err);
        this._config.set(null);
      },
    });
  }

  rotateConfig(): void {
    const nextIndex = (this.currentIndex() + 1) % this.presets.length;
    this.currentIndex.set(nextIndex);
    this.loadCurrentPreset();
  }
}
