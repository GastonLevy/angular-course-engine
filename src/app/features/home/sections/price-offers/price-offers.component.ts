import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceOffersConfig } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-price-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-offers.component.html',
  styleUrl: './price-offers.component.css',
})
export class PriceOffersComponent {
  @Input({ required: true }) config!: PriceOffersConfig;
}
