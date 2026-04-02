// src/app/app.ts
import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar';
import { Footer } from './core/footer/footer';
import { AppConfigService } from './services/app-config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app');

  private readonly configService = inject(AppConfigService);

  rotateConfig() {
    this.configService.rotateConfig();
  }
}
