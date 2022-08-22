import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/models/IUsers';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {
  users:IUsers[]=[
    {id:1, name:'kameswari'},
    {id:2, name:'Ganesh'},
    {id:3, name:'kameswari'},
    {id:4, name:'Ganesh'},
    {id:5, name:'kameswari'},
    {id:6, name:'Ganesh'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
