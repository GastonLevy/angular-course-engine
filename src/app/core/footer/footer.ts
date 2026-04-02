import { Component, Input } from '@angular/core';
import { FooterColumn } from './footer.types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Input() columns: FooterColumn[] = [
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
