import { Injectable } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()

export class ProductsService{

   private  products : Product[] = [];
 
   createProduct(title : string , description : string , price : number) : string{

   const prodId = new Date().toString();

   const newProduct = new Product(prodId,title,description,price);

   this.products.push(newProduct)

   return prodId;

  }

  getProduct(){

   return this.products;
  }

   
}