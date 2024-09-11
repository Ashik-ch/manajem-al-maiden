import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './home/pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';

const Component = [
  HomeComponent,
  HeaderComponent,
  AboutComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    Component,
    ServiceComponent,
    ProductComponent,
    ContactComponent,
    CareersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports: [
    Component
  ]
})
export class PagesModule { }
