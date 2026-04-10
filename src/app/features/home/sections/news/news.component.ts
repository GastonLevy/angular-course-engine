import { Component, Input } from '@angular/core';
import { NewsItem } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {
  @Input() news!: NewsItem[];
}
