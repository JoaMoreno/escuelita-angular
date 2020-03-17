import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'product/:id', component: ProductDetailComponent},
  {path:'add', component: AddProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
