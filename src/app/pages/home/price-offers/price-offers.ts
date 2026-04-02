import { Component, inject, effect } from '@angular/core';
import { PriceOffersConfig } from './price-offers.types';
import { AppConfigService } from '../../../services/app-config.service';

@Component({
  selector: 'app-price-offers',
  standalone: true,
  templateUrl: './price-offers.html',
  styleUrl: './price-offers.css',
})
export class PriceOffers {
  private readonly appConfig = inject(AppConfigService);

  config: PriceOffersConfig = {
    heading: '',
    subheading: '',
    offers: [],
  };

  constructor() {
    effect(() => {
      const cfg = this.appConfig.config()?.priceOffers;
      console.log('[PriceOffers] priceOffers desde service:', cfg);
      if (cfg) {
        this.config = cfg;
      }
    });
  }
}
