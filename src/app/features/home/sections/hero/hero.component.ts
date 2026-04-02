import { Component, Input } from '@angular/core';
import { HeroConfig } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Input({ required: true }) hero!: HeroConfig;
}
