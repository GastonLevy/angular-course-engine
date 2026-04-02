import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teacher } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css',
})
export class TeacherComponent {
  @Input({ required: true }) teachers!: Teacher[];
}
