import { Component, inject } from '@angular/core';
import { CourseCatalogService } from '../../data-access/course-catalog.service';
import { HeroComponent } from './sections/hero/hero.component';
import { TeacherComponent } from './sections/teacher/teacher.component';
import { TechComponent } from './sections/tech/tech.component';
import { PriceOffersComponent } from './sections/price-offers/price-offers.component';
import { CourseFormatsComponent } from './sections/course-formats/course-formats.component';
import { CourseTopicComponent } from './sections/course-topic/course-topic.component';
import { LearningSpaceComponent } from './sections/learning-space/learning-space.component';
import { NewsComponent } from './sections/news/news.component';
import { VideosComponent } from './sections/videos/videos.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    TeacherComponent,
    TechComponent,
    CourseFormatsComponent,
    PriceOffersComponent,
    CourseTopicComponent,
    LearningSpaceComponent,
    NewsComponent,
    VideosComponent,
    TestimonialsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly catalogService = inject(CourseCatalogService);

  readonly catalog = this.catalogService.catalog;
  readonly courses = this.catalogService.courses;
  readonly currentCourseKey = this.catalogService.currentCourseKey;

  readonly isLoading = this.catalogService.isLoading;
  readonly error = this.catalogService.error;

  selectCourse(courseKey: string): void {
    this.catalogService.loadCourse(courseKey);
  }

  isActiveCourse(courseKey: string): boolean {
    return this.currentCourseKey() === courseKey;
  }
}
