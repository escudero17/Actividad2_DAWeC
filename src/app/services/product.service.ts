import { Injectable } from '@angular/core';

import { PRODUCTOS } from '../db/products.db';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private arrProducts: IProduct[];
  constructor() { 
    this.arrProducts = PRODUCTOS;
  }

  findAll() : IProduct[] {
    return this.arrProducts;
  }

  findById(id: string) : IProduct | undefined{
    return  this.arrProducts.find(product => product._id == id);
  }

  insertProduct(product : IProduct) : void {
    product._id = (this.arrProducts.length+1).toString();
    product.active=true;
     this.arrProducts.push(product);
  }
}
