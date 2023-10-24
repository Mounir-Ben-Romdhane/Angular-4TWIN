import {Component, OnInit} from '@angular/core';
import {FirstService} from "../service/first.service";

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers:[FirstService]
})
export class C2Component implements  OnInit{
constructor(private s:FirstService) {
}
ngOnInit() {
  //this.s.showtab();
}
showtab(){
  this.s.showtab();
}
}
