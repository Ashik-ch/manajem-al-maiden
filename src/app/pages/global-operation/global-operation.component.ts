import { Component } from '@angular/core';

@Component({
  selector: 'app-global-operation',
  templateUrl: './global-operation.component.html',
  styleUrls: ['./global-operation.component.scss']
})
export class GlobalOperationComponent {

  manajemOperationsData = [{

    heading: "Global Operations",
    question: "How does Manajem manage its global operations?",
    answer: `Manajem operates on a global scale, delivering high-quality products and services across key regions worldwide. Our operations are designed to meet diverse client needs, adapting seamlessly to varying market conditions and regulatory environments. We offer consistent and reliable support, ensuring our clients can depend on us for operational excellence no matter where they are located.`
  },
  {
    heading: "Regional Presence",
    question: "How does Manajem maintain its presence in major oil and gas markets?",
    answer: `Manajem's network of regional hubs and dedicated experts allow us to maintain a strong presence in key oil and gas markets worldwide. This global reach enables us to respond swiftly to our clients' demands, offering tailored solutions optimized for the specific challenges of each region. Whether it's managing complex supply chains or providing technical support, our operations enhance efficiency and productivity.`
  }, {
    heading: "Innovation and Sustainability",
    question: "How does Manajem incorporate innovation and sustainability in its global operations?",
    answer: `Manajem's commitment to global excellence is reflected in partnerships with industry leaders and investments in cutting-edge technology and sustainable practices. We collaborate with clients and partners to develop solutions that meet current needs while anticipating future challenges. By integrating local expertise with global standards, we contribute positively to communities and markets, driving sustainable growth.`
  }]
};

