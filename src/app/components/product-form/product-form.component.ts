import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  modelForm: FormGroup<any>;
  private productService = inject(ProductService);

  
constructor() {

  this.modelForm = new FormGroup({
    name: new FormControl(null,[]),
    description: new FormControl(null,[]),
    price: new FormControl(null,[]),
    category: new FormControl(null,[]),
    image: new FormControl(null,[]),
    action: new FormControl(null, []),
    

  }, [])

}
getDataForm(){
  let producto: IProduct = this.modelForm.value as IProduct;
  this.productService.insertProduct(producto);
  console.log(this.modelForm.value);
  this.modelForm.reset();
}


}
