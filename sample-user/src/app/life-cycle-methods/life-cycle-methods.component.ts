import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-methods',
  templateUrl: './life-cycle-methods.component.html',
  styleUrls: ['./life-cycle-methods.component.css']
})
export class LifeCycleMethodsComponent implements OnInit {
  @Input() user:string="";
  @Input() item:string="";
  constructor() { 
    console.log("constructor called");
  }
  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges Called");
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("ngOnInIt called");
  }
  ngDoCheck(){
    console.log("ngdoCheck method called");
  }
  onChangeDummy(){

  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContenthecked called");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }
  ngOnDestroy(){
    console.log("COMPONENT IS DESTROYED");
  }
}
