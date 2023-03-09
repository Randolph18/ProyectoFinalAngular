import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { };

  private urlApi = "Http://localhost:3000";

  getProductos(){
    return this.http.get(this.urlApi+'/products')
  }

  getProducto(id:any){
    return this.http.get(`${this.urlApi}/products/${id}`)
  }

  saveProduct(producto:any){
    return this.http.post(this.urlApi + '/product', producto)
  }
};

