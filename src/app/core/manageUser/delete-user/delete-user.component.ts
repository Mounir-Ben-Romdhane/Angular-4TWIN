import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

constructor(private user:UserService
            ,private ac:ActivatedRoute,
            private router:Router) {
}
ngOnInit(){
  this.user.removeUser(this.ac.snapshot.params['id']).subscribe(
    ()=>{
      this.router.navigate(['users'])
    },
    (err)=>{
      let status=err.status;
      switch (status){
        case 0:alert('server ') ;break;
        case 401:alert('unauthoriz ') ;break;
        case 404:alert('unauthoriz ') ;break;
      }
    }
  );
}
}
