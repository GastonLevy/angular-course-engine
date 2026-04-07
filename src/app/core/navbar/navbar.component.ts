import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NavbarItem } from './navbar.types';
import { CourseCatalogService } from '../../data-access/course-catalog.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly router = inject(Router);
  private readonly catalogService = inject(CourseCatalogService);

  readonly courses = this.catalogService.courses;
  readonly currentCourseKey = this.catalogService.currentCourseKey;

  items: NavbarItem[] = [
    { type: 'logo', text: 'CodeFactory', href: '#course' },
    { type: 'link', text: 'About us', href: '/about-us' },
    { type: 'link', text: 'Contact', href: '/contact' },
  ];

  selectCourse(courseKey: string): void {
    this.catalogService.loadCourse(courseKey);
    this.router.navigate(['/']);
  }

  isActiveCourse(courseKey: string): boolean {
    return this.currentCourseKey() === courseKey;
  }
}
