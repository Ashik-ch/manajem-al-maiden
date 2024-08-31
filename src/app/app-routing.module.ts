import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
