import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  name="";
  email="";
  phone="";
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }
  onAddUser(){
    let user:IUser={
      name:this.name,
      email:this.email,
      phone:this.phone
    }
    this.userService.addUser(user);

  }
}
