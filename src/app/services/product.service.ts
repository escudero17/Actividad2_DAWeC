import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { PRODUCTOS } from '../db/products.db';

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
}
