import {Component, OnInit} from '@angular/core';
import {FirstService} from "../service/first.service";

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements  OnInit{
constructor(private s:FirstService) {
}
ngOnInit() {
  this.s.addElementTotab('c');
  this.s.showtab();
}
}
