import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!:IUser[];
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getData();
    this.users=this.usersService.users;
    this.usersService.getUsersEvent.subscribe(data => {
      this.users=this.usersService.users;
    })
  }

}
