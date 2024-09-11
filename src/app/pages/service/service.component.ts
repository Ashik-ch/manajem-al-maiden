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



}
