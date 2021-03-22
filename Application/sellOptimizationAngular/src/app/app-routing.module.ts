import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyProductsComponent } from './my-products/my-products.component';

const routes: Routes = [
  {path: '', component : HomeComponent },
  {path: 'my-products', component : MyProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
