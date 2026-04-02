import { Component, inject, effect } from '@angular/core';
import { Teacher } from './teacher.types';
import { AppConfigService } from '../../../services/app-config.service';

@Component({
  selector: 'app-teacher',
  standalone: true,
  templateUrl: './teacher.html',
  styleUrls: ['./teacher.css'],
})
export class TeacherComponent {
  private readonly appConfig = inject(AppConfigService);

  teachers: Teacher[] = [];

  constructor() {
    effect(() => {
      const cfg = this.appConfig.config()?.teachers;
      console.log('[Teacher] teachers desde service:', cfg);
      if (cfg) {
        this.teachers = cfg;
      }
    });
  }
}
