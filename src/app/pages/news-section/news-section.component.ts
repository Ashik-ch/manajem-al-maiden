import { Component } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent {

  blogPosts = [
    {
      image: 'assets/img/news1.jpeg',
      date: '14 July',
      title: 'Molestiae ad reiciendis dignissimos',
      description: 'Alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    },
    {
      image: 'assets/img/news1.jpeg',
      date: '20 August',
      title: 'Sed ut perspiciatis unde omnis',
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    // Add more blog posts as needed
  ];
}
