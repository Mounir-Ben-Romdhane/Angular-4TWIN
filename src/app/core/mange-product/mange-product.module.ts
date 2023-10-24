import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangeProductRoutingModule } from './mange-product-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';


@NgModule({
  declarations: [
    AddproductComponent,
    ListProductComponent,
    DetailProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    MangeProductRoutingModule
  ]
})
export class MangeProductModule { }
