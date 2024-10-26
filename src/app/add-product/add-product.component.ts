import { Component } from '@angular/core';
import {ProductModel} from '../models/product.model';
import {FormsModule} from '@angular/forms';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  newProduct : ProductModel = new ProductModel();
  constructor(private productService : ProductService) {
  }
  addProduct():void{
    this.productService.addProduct(this.newProduct);

  }
}
