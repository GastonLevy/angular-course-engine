import { Component, Input } from '@angular/core';
import { LearningSpaceConfig } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-learning-space',
  standalone: true,
  templateUrl: './learning-space.component.html',
  styleUrl: './learning-space.component.css',
})
export class LearningSpaceComponent {
  @Input() learningSpace!: LearningSpaceConfig;
}
