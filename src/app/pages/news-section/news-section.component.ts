import { Component } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent {

  blogPosts = [
    {
      image: 'assets/img/c1.jpg',
      date: '14 July',
      title: 'Molestiae ad reiciendis dignissimos',
      description: 'Alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    },
    {
      image: 'assets/img/c2.jpg',
      date: '20 August',
      title: 'Sed ut perspiciatis unde omnis',
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    // Add more blog posts as needed
  ];
}
