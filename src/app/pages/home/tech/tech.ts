import { Component, inject, effect } from '@angular/core';
import { TechItem } from './tech.types';
import { AppConfigService } from '../../../services/app-config.service';

@Component({
  selector: 'app-tech',
  standalone: true,
  templateUrl: './tech.html',
  styleUrl: './tech.css',
})
export class Tech {
  private readonly appConfig = inject(AppConfigService);

  technologies: TechItem[] = [];

  constructor() {
    effect(() => {
      const cfg = this.appConfig.config()?.technologies;
      console.log('[Tech] technologies desde service:', cfg);
      if (cfg) {
        this.technologies = cfg;
      }
    });
  }
}
