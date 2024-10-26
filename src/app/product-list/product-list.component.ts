import { Component } from '@angular/core';
import { NgForOf, DatePipe } from '@angular/common';  // Import DatePipe
import {ProductModel} from '../models/product.model';
import {ProductService} from '../services/product.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products : ProductModel[];
  constructor(private productService : ProductService) {
    this.products = productService.productsList();
  }
  deleteProduct(product : ProductModel): void{
    let message = confirm("Are you sure to delete this product ?");
    if(message)
      this.productService.deleteProduct(product);

  }

}
