import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersComponent } from 'src/app/users/users.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userName:string='';
  // @ViewChild('ref') inputElement!: ElementRef;
  @ViewChild('users', {read:ElementRef}) users!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  // onAddUser(user:HTMLInputElement){
  //   console.log(user.value);
  // }
  // onAddUser(user:UsersComponent){
  //   console.log(user.selectedUser);
  // }
onAddUser(){
  // console.log(this.inputElement.nativeElement.value);
  console.log(this.users);
}
}
