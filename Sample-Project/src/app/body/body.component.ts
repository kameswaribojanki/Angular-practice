import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  dadName="Ganesh";
  princesName="Mahasri";
  buttonDisabled=true;
  constructor() { 
    setTimeout(()=>{
      this.buttonDisabled=false;
    },2000);
  }
  onButtonClick(){
    alert("button clicked");
  }
  mouseOver(){
    console.log("mouse over");
  }
  mouseMove(){
    console.log("mouse move");
  }
  mouseOut(){
    console.log("mouse out");
  }
  mouseUp(){
    console.log("mouse up");
  }
  mouseDown(){
    console.log("mouse down");
  }
  mouseLeave(){
    console.log("mouse leave");
  }
  ngOnInit(): void {
  }

}
