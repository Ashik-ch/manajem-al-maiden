import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {


  // Array of job titles and their descriptions
  jobDetails = [
    { name: "Geologist", description: "Studies the Earth's structure and composition to aid in the exploration and extraction of oil and gas." },
    { name: "Geophysicist", description: "Uses physical principles to understand the Earth's subsurface and locate oil and gas deposits." },
    { name: "Petroleum Engineer", description: "Designs and develops methods for extracting oil and gas from deposits below the Earth's surface." },
    { name: "Petroleum Engineer", description: "Designs and develops methods for extracting oil and gas from deposits below the Earth's surface." },
    // Add more job titles and descriptions as needed
  ];

} 
