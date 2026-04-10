import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  sections = [
    {
      title: 'How It Works',
      text: 'The application renders complete course pages dynamically using structured JSON configurations.',
    },
    {
      title: 'Dynamic Content System',
      text: 'Each section (hero, pricing, teachers, technologies) is driven by external data instead of hardcoded content.',
    },
    {
      title: 'Component Architecture',
      text: 'Built with reusable Angular standalone components focused on scalability and maintainability.',
    },
    {
      title: 'Course Presets',
      text: 'Different courses can be loaded instantly by switching JSON presets without modifying the UI logic.',
    },
    {
      title: 'Technologies',
      text: 'Angular, TypeScript, Bootstrap, and modern frontend patterns for real-world applications.',
    },
    {
      title: 'Project Goal',
      text: 'To demonstrate how a single frontend can support multiple products through clean architecture and data-driven design.',
    },
  ];
}
