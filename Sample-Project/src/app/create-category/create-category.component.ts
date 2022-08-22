import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  // classNames="btn btn-primary";
  // isButtonSmall=false;
  // isButtonPrimary=false;
   boxBackgroundColor='black';
   boxTextColor='white';
   showContent=false;
   isUserCreated=false;
  buttonClasses={
    "btn-primary":false,
    "btn-sm":false
  }
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick(){
    // this.classNames='btn btn-primary btn-sm';
    // this.isButtonSmall=true;
    // this.isButtonPrimary=true;
    this.buttonClasses['btn-primary']=true;
    this.buttonClasses['btn-sm']=true;
  }
  applyClasses(){
    return {
      'btn-warning':true,
      'btn-primary':true
    }
  }
  onButtonClick1(){
    this.boxBackgroundColor="red";
    this.boxTextColor="yellow";
    this.showContent=true;
  }
  onCreateUser(){
    this.isUserCreated=true;
  }
}
