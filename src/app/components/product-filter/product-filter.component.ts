import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product.service';
import { IFormFilter } from '../../interfaces/iform-filter';
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {

  private productService = inject(ProductService);
  arrProductos : IProduct[];
  
  constructor(){
    this.arrProductos = [];
  }

getDataForm(miFormulario: NgForm){
  let producto: IFormFilter = miFormulario.value as IFormFilter;
  console.log(producto);
  this.arrProductos = this.productService.getFiltros(producto);
  console.log(this.arrProductos)
//  return this.arrProducts;
    miFormulario.resetForm(); 

}



}
