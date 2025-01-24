import { ProductService } from './../../services/product.service';
import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  arrProducts : IProduct[];
  private productService = inject(ProductService);


  constructor() {
    this.arrProducts = [];
  }

  ngOnInit() : void {

    this.arrProducts = this.productService.findAll();

  }

}
