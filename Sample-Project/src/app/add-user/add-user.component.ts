import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userName:string="something";
  imageUrl="assets/images/maha.png";
  constructor() { }

  ngOnInit(): void {
  }
  onUserNameUpdate(event:Event){
    this.userName=(event.target as HTMLInputElement).value;
  }
}
