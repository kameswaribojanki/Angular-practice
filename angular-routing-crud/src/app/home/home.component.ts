import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin:boolean=true;
  constructor(private router:Router, private userService:UsersService, private authService:AuthService) { }

  ngOnInit(): void {
  }
  onLoginClick(){
    this.authService.login();
    this.userService.isLogin=this.isLogin;
    // this.userService.getUsersEvent.emit();
  }
  onLogOutClick(){
    this.authService.logout();
  }
}
