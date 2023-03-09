import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

export interface product {
  nombre : string,
  image : string,
  precio : string,

}


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

items: product[] = [];

constructor (private myservice:ProductService){}

ngOnInit(){
  this.getProductos();

}

////

getProductos(){
  this.myservice.getProductos().subscribe(resp =>{
    let aux: any = resp;
    this.items  = aux.mensaje;
    console.log("respuesta desde mi servicio", aux);
  });
} 

/////
getProducto(id : any){

  
} 

}
