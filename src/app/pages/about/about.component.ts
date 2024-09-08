import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutPage: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    const url = this.router.url;
    this.aboutPage = url === '/about';
  }
}
