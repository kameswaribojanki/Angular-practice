import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLogedIn!:boolean;
  constructor(private router:Router, private userService:UsersService){
    
  }
  ngOnInit(): void {
    this.isLogedIn=this.userService.isLogin;
    console.log(this.isLogedIn)
  }
  
  title = 'angular-routing-crud';
  
  
}
