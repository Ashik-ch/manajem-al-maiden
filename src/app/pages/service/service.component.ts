import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  @ViewChild('oilfieldServices', { static: true }) oilfieldServices!: ElementRef;
  @ViewChild('oilfieldChemicals', { static: true }) oilfieldChemicals!: ElementRef;
  @ViewChild('tradingDistribution', { static: true }) tradingDistribution!: ElementRef;
  currentParams: string = "";
  isOilfieldServicesOpen = false;
  isOilfieldChemicalsOpen = false;
  isTradingDistributionOpen = false;

  constructor(private AR: ActivatedRoute) { }

  ngOnInit() {
    this.AR.params.subscribe(para => {
      this.currentParams = para['business'];
      this.isOilfieldServicesOpen = this.currentParams === 'oilfield-services';
      this.isOilfieldChemicalsOpen = this.currentParams === 'oilfield-chemicals';
      this.isTradingDistributionOpen = this.currentParams === 'trading-distribution';
      this.scrollToAccordion();
    });
  }

  scrollToAccordion() {
    if (this.isOilfieldServicesOpen && this.oilfieldServices) {
      this.oilfieldServices.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (this.isOilfieldChemicalsOpen && this.oilfieldChemicals) {
      this.oilfieldChemicals.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (this.isTradingDistributionOpen && this.tradingDistribution) {
      this.tradingDistribution.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }



  chemicals = [
    {
      image: 'assets/img/b2a.jpg',
      title: 'Drilling Fluids',
      description: `Customized formulations designed to enhance drilling performance, control well pressure, and lubricate the drill bit. Our fluids are engineered to meet specific operational needs and environmental regulations.`
    },
    {
      image: 'assets/img/b2a.jpg',
      title: 'Cementing Chemicals',
      description: `Specialized products used in the cementing process to secure well casings and prevent fluid migration. Our cementing solutions are tailored to withstand various pressures and temperatures.`
    },
    {
      image: 'assets/img/b2a.jpg',
      title: 'Production Chemicals',
      description: `Chemicals that improve the efficiency of production operations, including scale inhibitors, corrosion inhibitors, and surfactants. These products help maintain equipment integrity and enhance resource recovery.`
    },
    {
      image: 'assets/img/b2a.jpg',
      title: 'Enhanced Oil Recovery (EOR) Chemicals',
      description: `Innovative chemicals designed to boost oil recovery from mature fields. Our EOR solutions include polymers, surfactants, and chemicals for CO2 and thermal injection processes.`
    },
    {
      image: 'assets/img/b2a.jpg',
      title: 'Environmental & Safety Chemicals',
      description: `Products designed to support environmental protection and safety in oilfield operations. This includes bioremediation agents, spill containment products, and non-toxic additives.`
    }
  ];
  services = [
    {
      image: 'assets/img/b1b.jpeg',
      title: 'Drilling Services',
      description: `Offering advanced drilling technologies and
expertise to improve well performance and efficiency. Our services
include rotary drilling, directional drilling, and managed pressure
drilling.`
    },
    {
      image: 'assets/img/b1b.jpeg',
      title: 'Well Completion',
      description: `Providing solutions for completing wells in
various geological formations. This includes casing, cementing, and
stimulation services to maximize production and extend the well life.`
    },
    {
      image: 'assets/img/b1a.jpeg',
      title: 'Production Optimization',
      description: `Utilizing state-of-the-art technologies
and methodologies to enhance production rates and reduce
operational costs. Services include artificial lift systems, well testing,
and flowback services.`
    },
    {
      image: 'assets/img/b1a.jpeg',
      title: 'Maintenance & Repair',
      description: `Ensuring the reliability and longevity of
oilfield equipment through comprehensive maintenance and repair
services. Our team is equipped to handle routine maintenance,
emergency repairs, and equipment upgrades.`
    },
    {
      image: 'assets/img/b1a.jpeg',
      title: 'Environmental Management',
      description: `Implementing practices and
technologies to minimize environmental impact, including waste
management, spill response, and emission control.`
    }
  ];
  supplyChainServices = [
    {
      image: 'assets/img/c1.jpg',
      title: 'Product Sourcing',
      description: `Identifying and procuring high-quality oil and gas products from reputable suppliers. We ensure that all products meet industry standards and client specifications.`
    },
    {
      image: 'assets/img/c1.jpg',
      title: 'Logistics Management',
      description: `Coordinating the transportation and delivery of products to ensure timely and efficient distribution. Our logistics solutions include pipeline transportation, trucking, and shipping.`
    },
    {
      image: 'assets/img/c1.jpg',
      title: 'Inventory Management',
      description: `Maintaining an extensive inventory to meet the demands of our clients. We implement efficient inventory control systems to manage stock levels and ensure product availability.`
    },
    {
      image: 'assets/img/c1.jpg',
      title: 'Market Analysis',
      description: `Conducting market research to identify trends and opportunities. This helps us to make informed decisions on product sourcing, pricing, and distribution strategies.`
    },
    {
      image: 'assets/img/c1.jpg',
      title: 'Customer Support',
      description: `Providing exceptional service to our clients, including order processing, tracking, and resolving any issues related to product delivery and quality.`
    }
  ];
} 