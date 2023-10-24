import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/Product';
import { ProductService } from '../serviceProduct/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  listProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts = this.productService.getAllProducts();
  }

  getNbProductsByLibelle(libelle: string): number {
    console.log(this.listProducts.filter(product => product.libelle === libelle).length);
    return this.listProducts.filter(product => product.libelle === libelle).length;

  }

}
