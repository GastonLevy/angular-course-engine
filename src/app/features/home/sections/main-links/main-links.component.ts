import { Component, Input } from '@angular/core';
import { MainWebsiteLink } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-main-links',
  standalone: true,
  templateUrl: './main-links.component.html',
  styleUrl: './main-links.component.css',
})
export class MainLinksComponent {
  @Input() links!: MainWebsiteLink[];
}
