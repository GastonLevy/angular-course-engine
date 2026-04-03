// src/app/app.ts
import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { CourseCatalogService } from './data-access/course-catalog.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app');

  private readonly configService = inject(CourseCatalogService);

  rotateConfig() {
    this.configService.rotateConfig();
  }
}
