import {CategoryModel} from './category.model';

export class ProductModel{
  productId? : number;
  productName? : string;
  productPrice? : number;
  dateCreation? : Date;
  category? : CategoryModel;
}
