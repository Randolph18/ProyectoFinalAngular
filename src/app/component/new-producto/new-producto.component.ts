import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent {

  forma : FormGroup;

  constructor( private fb: FormBuilder, 
               private productoService: ProductService, 
               private router: Router ) {
            
              this.forma = this.fb.group({
                nombre : ['',[Validators.required,Validators.minLength(2)]],
                precio : ['',[Validators.required,Validators.minLength(2)]],
                imagen : ['',[Validators.required]],
              });

  }

  guardar (){
    console.log("Guardando...");
    this.createProduct();
  }

  createProduct() {
    let obj = {
      nombre : this.forma.get('nombre')?.value,
      precio : this.forma.get('precio')?.value,
      //imagen : this.forma.get('imagen')?.value,
      imagen : "./assets/img/productos/frutas/manzanas.png",
    }
    this.productoService.saveProduct(obj).subscribe(resp =>{
      console.log(resp)
    });
    this.router.navigate(['/productos']);
  }

}
