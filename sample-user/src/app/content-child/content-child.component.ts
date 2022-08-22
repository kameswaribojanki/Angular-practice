import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {
  @ContentChild('ref') para!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
ngAfterContentInit(){
  console.log(this.para);
}
}
