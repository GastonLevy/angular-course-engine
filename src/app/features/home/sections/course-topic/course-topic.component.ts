import { Component, Input } from '@angular/core';
import { CourseTopicConfig } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-course-topic',
  standalone: true,
  templateUrl: './course-topic.component.html',
  styleUrl: './course-topic.component.css',
})
export class CourseTopicComponent {
  @Input() topic!: CourseTopicConfig;
}
