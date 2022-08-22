import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:User[] | null=null;
  selectedUser: User | null = null;
  constructor() {
    this.users=[new User(1,'kameswari1','hyderabad','software'), new User(2,'kameswari2','hyderabad','software'), new User(3,'kameswari3','hyderabad','software'), new User(4,'kameswari4','hyderabad')];
    console.log(this.users);
   }
   trackUser(index:number, user:User){
     return user ? user.id : undefined;
   }
   onUserSelect(event:User){
     this.selectedUser=event;
   }
}
