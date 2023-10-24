import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/entity/Product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl="http://localhost:3000/products/"
  constructor(private http:HttpClient) { }
  getProductList():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }
  getProductById(id:any):Observable<Product>{
return this.http.get<Product>(this.baseUrl+id)
  }
  removeProduct(id:any){
return this.http.delete(this.baseUrl+id)
  }
}
