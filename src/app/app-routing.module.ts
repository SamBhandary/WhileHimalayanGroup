import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ProductComponent} from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'products',
    component: ProductComponent
  },
  {
    path:'products/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [HomeComponent, ContactComponent, ProductComponent, ProductDetailComponent]
