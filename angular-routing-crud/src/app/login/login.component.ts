import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @ViewChild('form') signUpForm!:NgForm;
  constructor(private router:Router, private logservice:UsersService) { }

  ngOnInit(){
  }
  onSubmitClick(){
    console.log(this.signUpForm);
    console.log(this.signUpForm.value);
    this.router.navigateByUrl('/users');
    

  }
}

