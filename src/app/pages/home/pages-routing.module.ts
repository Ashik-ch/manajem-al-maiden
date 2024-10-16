import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { ProductComponent } from '../product/product.component';
import { ContactComponent } from '../contact/contact.component';
import { CareersComponent } from '../careers/careers.component';
import { NewsSectionComponent } from '../news-section/news-section.component';
import { GlobalOperationComponent } from '../global-operation/global-operation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'business-unit', component: ServiceComponent },
  { path: 'business-unit/:business', component: ServiceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products-services', component: ProductComponent },
  { path: 'products-services/:ps', component: ProductComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'news-media', component: NewsSectionComponent },
  { path: 'global-operation', component: GlobalOperationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
