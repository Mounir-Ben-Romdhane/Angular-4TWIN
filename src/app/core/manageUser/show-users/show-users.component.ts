import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from 'src/app/model/users';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
constructor(private service:UserService){
}
users!:User[];
ngOnInit(): void {
    this.service.getUserList().subscribe(
      (d)=>{
        console.log(d)
        this.users=d;
        
      }
    )
   
}
}
