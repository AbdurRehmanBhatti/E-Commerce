import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProducts(data:products){
  return this.http.post('http://localhost:3000/products',data);
  }

  productList(){
    return this.http.get<products[]>('http://localhost:3000/products');
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id:string){
    return this.http.get<products>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(product:products){
    return this.http.put<products>(`http://localhost:3000/products/${product.id}`, product);
  }

  popularProduct(){
    return this.http.get<products[]>('http://localhost:3000/products?_limit=3');
  }

  trendyProduct(){
    return this.http.get<products[]>(`http://localhost:3000/products?_limit=8`);
  }

  queryProduct(query:string){
    return this.http.get<products[]>(`http://localhost:3000/products?q=${query}`);
  }

}
