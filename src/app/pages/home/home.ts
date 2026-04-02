import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { TeacherComponent } from './teacher/teacher';
import { Tech } from './tech/tech';
import { PriceOffers } from './price-offers/price-offers';
import { CourseFormats } from './course-formats/course-formats';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, TeacherComponent, Tech, CourseFormats, PriceOffers],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
