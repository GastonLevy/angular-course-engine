import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormatsConfig } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-course-formats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-formats.component.html',
  styleUrl: './course-formats.component.css',
})
export class CourseFormatsComponent {
  @Input({ required: true }) config!: CourseFormatsConfig;
}
