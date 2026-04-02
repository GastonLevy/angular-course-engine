import { Component } from '@angular/core';
import { NavbarItem } from './navbar.types';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  items: NavbarItem[] = [
    { type: 'logo', text: 'CodeFactory', href: '#course' },

    { type: 'link', text: 'Course', href: '#course' },
    { type: 'link', text: 'Teacher', href: '#teacher' },
    { type: 'link', text: 'Technologies', href: '#tech' },
    { type: 'link', text: 'News', href: '#news' },
    { type: 'link', text: 'About us', href: '/about-us' },
    { type: 'link', text: 'Contact', href: '/contact' },

    {
      type: 'button',
      text: 'Register',
      href: '#price-offers',
      classes: 'btn btn-primary ms-lg-3',
    },
  ];
}
