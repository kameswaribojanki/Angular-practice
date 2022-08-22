import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../models/IUser';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  @Input() user!:IUser;
  //id!:number;
  constructor(private router:Router, private route:ActivatedRoute, private userService:UsersService) { }

  ngOnInit(): void {
    
  }
  onDelete(){
    const userId = this.user.id;

    if (confirm('r u sure you want to delete')) {
      userId && this.userService.deleteUser(userId);
      this.userService.getUsersEvent.emit();
    } 

    // console.log(this.user.id);
    // for(let i=0;i<this.userService.users.length;i++){
    //   if(this.user.id==this.userService.users[i].id){
    //     this.userService.users=this.userService.users.splice(i,1);
    //   }
    // }
  }
}
