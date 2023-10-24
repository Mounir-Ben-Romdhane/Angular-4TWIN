import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Product } from 'src/app/entity/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{

  id:any;
  product= new Product();
  constructor(private activatedroute: ActivatedRoute,private service: ServiceService){}

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    //console.log("ID : "+this.id);
    this.service.getProductById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.product = data;
      }
    )
  }

}
