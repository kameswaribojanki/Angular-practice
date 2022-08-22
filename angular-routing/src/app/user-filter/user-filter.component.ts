import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css']
})
export class UserFilterComponent implements OnInit {
  users=[
    {
      id:1,
      name:'user1',
      joindDate:new Date('12-08-2015')
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
