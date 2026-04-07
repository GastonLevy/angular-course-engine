import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  team = [
    {
      name: '@PatFerko',
      description: 'Front-end developer focusing on clean UI and component architecture.',
      github: 'https://github.com/PatFerko',
    },
    {
      name: '@DusanNika',
      description: 'Developer with a focus on performance, state management, and code quality.',
      github: 'https://github.com/DusanNika',
    },
    {
      name: '@GastonLevy',
      description: 'Full-stack developer working on integration, data flow, and architecture.',
      github: 'https://github.com/GastonLevy',
    },
  ];

  copyEmail(): void {
    navigator.clipboard.writeText('ggastlino@gmail.com');
  }
}
