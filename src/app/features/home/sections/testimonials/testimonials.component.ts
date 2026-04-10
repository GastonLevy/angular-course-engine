import { Component, Input } from '@angular/core';
import { TestimonialsConfig } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  @Input() testimonials!: TestimonialsConfig;
}
