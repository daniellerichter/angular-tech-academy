import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductDetailComponent } from './products/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
