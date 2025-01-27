import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    name: new FormControl(null,[Validators.required]),
    description: new FormControl(null,[Validators.required]),
    price: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required]),
    image: new FormControl(null,[]),
    active: new FormControl(null, []),
    

  }, [])

}


getDataForm(){
  let producto: IProduct = this.modelForm.value as IProduct;
  
  
  producto.image = "http://peticiones.online/images/products/image10.png";
  console.log(producto);
  this.productService.insertProduct(producto);
  
  this.modelForm.reset();
}

checkControl(formControlName: string, validador: string) :boolean | undefined{
 
  return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched;

}


}
