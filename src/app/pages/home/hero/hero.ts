import { Component, inject, effect } from '@angular/core';
import { AppConfigService } from '../../../services/app-config.service'; // 👈 ajustá la ruta
import { HeroConfig } from './hero.types';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class HeroComponent {
  private readonly appConfig = inject(AppConfigService);

  // Valor inicial seguro
  hero: HeroConfig = {
    title: '',
    text: '',
    buttonText: '',
    buttonLink: '',
    imageUrl: '',
    imageAlt: '',
  };

  constructor() {
    effect(() => {
      const cfg = this.appConfig.config()?.hero;
      console.log('[Hero] hero desde service:', cfg); // DEBUG
      if (cfg) {
        this.hero = cfg;
      }
    });
  }
}
