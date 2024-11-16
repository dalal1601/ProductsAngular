import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgForOf} from '@angular/common';
import {CategoryModel} from '../models/category.model';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgForOf
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements  OnInit{
  currentProduct : ProductModel = new ProductModel();
  categories : CategoryModel[];
  newCategory! : CategoryModel;
  newCategoryId! : number;
  constructor(
    private productService : ProductService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) {    this.categories = productService.categoriesList();}
  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.currentProduct = this.productService.editProduct(this.activatedRoute.snapshot.params['id']);
    this.newCategoryId = this.currentProduct.category?.categoryId!;
  }
  updateProduct():void{
    this.newCategory = this.productService.editCategory(this.newCategoryId);
    this.currentProduct.category = this.newCategory;
    this.productService.updateProduct(this.currentProduct);
    this.router.navigate(['products-list']);
  }
}
