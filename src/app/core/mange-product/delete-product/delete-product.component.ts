import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit{
  id:any;
  constructor(private activatedRoute: ActivatedRoute,
    private service: ServiceService,
    private router:Router){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.removeProduct(this.id).subscribe(
      () => {
        console.log("Deleted Successfully");
        this.router.navigate(['products']);
      }

    )
  }

}
