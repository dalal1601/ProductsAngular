import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product.model';
import {CategoryModel} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : ProductModel[];
  product! : ProductModel; //objectforProductID
  categories : CategoryModel[];
  category! : CategoryModel;
  constructor() {
    this.categories = [
      {categoryId : 1, categoryName : "Bakery"},
      {categoryId : 2, categoryName : "Dairy"},
      {categoryId : 3, categoryName : "Meat"},
      {categoryId : 4, categoryName : "Frozen food"},
      {categoryId : 5, categoryName : "Seafood"},
    ]
    this.products = [
      {productId : 1, productName: "Cheese", productPrice : 34.00, dateCreation: new Date(), category:{categoryId : 2, categoryName : "Dairy"}},
      {productId : 2, productName: "Bread", productPrice : 3.00, dateCreation: new Date(),  category:{categoryId : 1, categoryName : "Bakery"}},
      {productId : 3, productName: "Milk", productPrice : 8.00, dateCreation: new Date(),  category:{categoryId : 2, categoryName : "Dairy"}}

    ];
  }
  productsList(): ProductModel[]{
    return this.products;
  }
  addProduct(newProduct : ProductModel):void{
    this.products.push(newProduct);
  }
  deleteProduct(product : ProductModel): void{
    const index = this.products.indexOf(product, 0);
    this.products.splice(index, 1);
  }
  editProduct(id : number): ProductModel{
    this.product = this.products.find(p => p.productId == id)!;
    return this.product ;
  }
  updateProduct(product : ProductModel):void{
    this.deleteProduct(product);
    this.addProduct(product);
    this.sortProducts();
  }
  sortProducts():void{
    this.products.sort(
      (x,y)=>
        (x.productId! > y.productId! ? 1 : -1)
    )
  }
  categoriesList(): CategoryModel[]{
    return this.categories;
  }
  editCategory(id : number): CategoryModel{
    this.category = this.categories.find(c => c.categoryId == id)!;
    return this.category ;
  }
}
