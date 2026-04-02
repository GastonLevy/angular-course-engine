import { Component, inject } from '@angular/core';
import { CourseCatalogService } from '../../data-access/course-catalog.service';
import { HeroComponent } from './sections/hero/hero.component';
import { TeacherComponent } from './sections/teacher/teacher.component';
import { TechComponent } from './sections/tech/tech.component';
import { PriceOffersComponent } from './sections/price-offers/price-offers.component';
import { CourseFormatsComponent } from './sections/course-formats/course-formats.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    TeacherComponent,
    TechComponent,
    CourseFormatsComponent,
    PriceOffersComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly catalogService = inject(CourseCatalogService);

  readonly catalog = this.catalogService.catalog;
}
