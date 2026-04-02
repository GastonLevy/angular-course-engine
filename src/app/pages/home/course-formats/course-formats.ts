import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormatsConfig } from './course-formats.types';
import { AppConfigService } from '../../../services/app-config.service';

@Component({
  selector: 'app-course-formats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-formats.html',
  styleUrl: './course-formats.css',
})
export class CourseFormats {
  private readonly appConfig = inject(AppConfigService);

  config: CourseFormatsConfig = {
    heading: '',
    subheading: '',
    formats: [],
  };

  constructor() {
    effect(() => {
      const cfg = this.appConfig.config()?.courseFormats;
      console.log('courseFormats desde service:', cfg);
      if (cfg) {
        this.config = cfg;
      }
    });
  }
}
