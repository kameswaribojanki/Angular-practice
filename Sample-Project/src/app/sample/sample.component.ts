import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  isButtonDisabled=true;
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick(){
    this.isButtonDisabled=!this.isButtonDisabled;
  }
}
