import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { ProductComponent } from '../product/product.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'business-unit/:business', component: ServiceComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'products-services', component: ProductComponent, children: [
      { path: 'minerals', component: ProductComponent },
      { path: 'production-chemicals', component: ProductComponent },
      { path: 'specialty-chemicals', component: ProductComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
