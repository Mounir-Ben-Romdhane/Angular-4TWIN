import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
  tab=['a','b'];
  showtab(){
    console.log(this.tab);

  }
  addElementTotab(element:any){
    this.tab.push(element);
    console.log(this.tab)
  }
  test(){
    return new Observable(
      ()=>{
        console.log('test')
      }
    )
  }
}
