import { UUIDTypes } from './../../../node_modules/uuid/dist/cjs-browser/types.d';
import { Injectable } from '@angular/core';

import { PRODUCTOS } from '../db/products.db';
import { IProduct } from '../interfaces/iproduct';
import { v4 as uuidv4 } from 'uuid';
import { IFormFilter } from '../interfaces/iform-filter';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private arrProducts: IProduct[];
//  private arrCategories: string[];
  
  constructor() { 
    // https://jsonblob.com/api/1333131898414882816
    this.arrProducts = PRODUCTOS;
   
  }

  findAll() : IProduct[] {
    return this.arrProducts;
  }

  findByPriceMayor(price: number) : IProduct[]{
   
    const filtrados =  this.arrProducts.filter(p=> p.price >= price);
    this.arrProducts.splice(0,this.arrProducts.length, ...filtrados);

    return this.arrProducts;
                           

  }

  deleteById(_id: string) : IProduct[]{

    let i = this.arrProducts.findIndex(proc => proc._id == _id);

    if (i != -1){
      this.arrProducts.splice(i,1);
    }

    return this.arrProducts;

  }
  
  
  findById(id: string) : IProduct | undefined{
    return  this.arrProducts.find(product => product._id == id);
  }

  insertProduct(product : IProduct) : void {
    // para este uuid, he hecho npm install uuid
    // y para este método te importas { v4 as uuidv4 } from 'uuid';
    product._id = uuidv4();
    //esta es la primera version mas rudimentaria
  //  product._id = (this.arrProducts.length+1).toString();
 
     this.arrProducts.push(product);
  }
  

  getFiltros(filtro: IFormFilter) : IProduct[]{
    console.log(filtro);
    let filtrados : IProduct [] = [];
    // estuve probando solo con filter y no había manera que saliesen los filtrados
    // esto del splice me has dado la idea en el ultimo laboratorio.
    // la solucion del splice me he buscado las mañas para sacarlo
    if (filtro.name != ''){
      filtrados =  this.arrProducts.filter(p=> p.name.toLowerCase().includes(filtro.name.toLowerCase()));
      filtrados = this.arrProducts.splice(0,this.arrProducts.length, ...filtrados);
    }
    if(filtro.category != ''){
      filtrados =  this.arrProducts.filter(p=> p.category.toLowerCase().includes(filtro.category.toLowerCase()));
      filtrados = this.arrProducts.splice(0,this.arrProducts.length, ...filtrados);
    }

    if(filtro.price >  0){
      filtrados =  this.arrProducts.filter(p=> p.price >= filtro.price);
      filtrados = this.arrProducts.splice(0,this.arrProducts.length, ...filtrados);
    }
     
    // el active no me salia así que lo he quitado del filtro

    return this.arrProducts;

  }
}


