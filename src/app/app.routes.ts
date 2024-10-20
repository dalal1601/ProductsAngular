import { Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {AddProductComponent} from './add-product/add-product.component';

export const routes: Routes = [
  {path : "products-list", component : ProductListComponent},
  {path : "add-product", component : AddProductComponent},
  {path :"", redirectTo : "products-list", pathMatch : "full"}

];
