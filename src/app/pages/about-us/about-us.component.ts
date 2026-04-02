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
      title: 'Course Topic Explanation',
      text: 'General description about the course topic and what students will learn.',
    },
    {
      title: 'Testimonials',
      text: 'Feedback from previous students to help new users understand the course experience.',
    },
    { title: 'Videos', text: 'Introductory or promotional videos related to the course content.' },
    {
      title: 'Information About the Teacher',
      text: 'Details about the instructor, background, skills, and achievements.',
    },
    {
      title: 'Information About the Course Space',
      text: 'Description of the learning environment, materials, or platforms used.',
    },
    {
      title: 'Information About the Course Technologies',
      text: 'List of tools and technologies the course uses or teaches.',
    },
    { title: 'News Section', text: 'Updates, announcements, or relevant news about the course.' },
    { title: 'Price Offers', text: 'Different pricing options and special offers for students.' },
    {
      title: 'Different Course Formats',
      text: 'Available formats such as Intro, Basic, and Advanced versions of the course.',
    },
    {
      title: 'Links to the Main Website',
      text: 'Navigation links to the main platform or related pages.',
    },
  ];
}
