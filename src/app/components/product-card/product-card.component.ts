import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {


  @Input() producto! : IProduct;

  productService = inject(ProductService);


  deleteProduct(producto : IProduct) {
    this.productService.deleteById(producto._id);
    
    }

}
