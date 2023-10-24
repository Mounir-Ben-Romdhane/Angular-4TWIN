import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Product } from 'src/app/entity/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
  products: Product[]= [];
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getProductList().subscribe(
      (data)=>{
        console.log("Data received", data);
        this.products = data;
      }
    );
  }

}
