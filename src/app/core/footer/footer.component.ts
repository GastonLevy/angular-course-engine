import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() columns = [
    {
      items: [
        { type: 'title', text: 'Info' },
        { type: 'link', text: 'Home', href: '/' },
        { type: 'link', text: 'About', href: '/about' },
        { type: 'link', text: 'Pricing', href: '/pricing' },
        { type: 'link', text: 'FAQs', href: '/faqs' },
      ],
    },
    {
      items: [
        { type: 'title', text: 'My Account' },
        { type: 'link', text: 'Login', href: '/login' },
        { type: 'link', text: 'Register', href: '/register' },
      ],
    },
  ];
}
