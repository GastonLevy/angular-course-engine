import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technology } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css',
})
export class TechComponent {
  @Input({ required: true }) technologies!: Technology[];
}
