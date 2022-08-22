import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDeactivate } from '../guards/deactivate-guard.service';
import { IUser } from '../models/IUser';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit,  IDeactivate {

  id!:number;

  name=" ";
  email="";
  phone="";
  constructor(private route:ActivatedRoute, private userService:UsersService, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    // console.log(this.id);
    for(let i=0;i<this.userService.users.length;i++){
      if(this.id==this.userService.users[i].id){
        // console.log("id's matched");
        this.name=this.userService.users[i].name;
        this.email=this.userService.users[i].email;
        this.phone=this.userService.users[i].phone;
      }
    }
  }
  onEditUser(){
    for(let i=0;i<this.userService.users.length;i++){
      if(this.id==this.userService.users[i].id){
        this.userService.users[i].name=this.name;
        this.userService.users[i].email=this.email;
        this.userService.users[i].phone=this.phone;
      }
    }
    this.userService.setData(this.userService.users);
    this.router.navigate(['/users']);
  }
  canExit(){
    this.id=this.route.snapshot.params['id'];
      if(this.name!==this.userService.users[this.id-1].name || this.email!==this.userService.users[this.id-1].email || this.phone!==this.userService.users[this.id-1].phone){
        if(confirm('If you leave the page the data will be lost')){
          return true;
          }
        return false;
    }
    return true;
  }
}
