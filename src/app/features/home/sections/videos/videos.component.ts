import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideosConfig } from '../../../../shared/models/course-catalog.model';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent {
  @Input() videos!: VideosConfig;

  activeIndex: number | null = null;

  private readonly sanitizer = inject(DomSanitizer);

  toggleVideo(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
