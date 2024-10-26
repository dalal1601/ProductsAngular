import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements  OnInit{
  currentProduct : ProductModel = new ProductModel();
  constructor(
    private productService : ProductService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) {}
  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.currentProduct = this.productService.editProduct(this.activatedRoute.snapshot.params['id']);
  }
  updateProduct():void{
    this.productService.updateProduct(this.currentProduct);
    this.router.navigate(['products-list']);
  }
}
