import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactivate } from '../guards/deactivate-guard.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit, IDeactivate {
  userDetails:{id:string; name:string}={
    id:'',
    name:''
  }
  editUserDetails=this.userDetails;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.userDetails={
        id:data['id'],
        name:data['name']
      };
      this.editUserDetails={...this.userDetails};
    })
  }
  canExit(){
    if(this.userDetails.id !== this.editUserDetails.id || this.userDetails.name !== this.editUserDetails.name){
      if(confirm('are you sure you want to leave the page')){
        return true;
      }
      return false;
    }
    return true;
  }

}
