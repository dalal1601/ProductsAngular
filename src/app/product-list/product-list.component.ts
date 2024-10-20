import { Component } from '@angular/core';
import { NgForOf, DatePipe } from '@angular/common';  // Import DatePipe
import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products : ProductModel[];
  constructor() {
    this.products = [
      {productId : 1, productName: "Cheese", productPrice : 34.00, dateCreation: new Date()},
      {productId : 2, productName: "Bread", productPrice : 3.00, dateCreation: new Date()},
      {productId : 3, productName: "Milk", productPrice : 8.00, dateCreation: new Date()}

    ];
  }

}
