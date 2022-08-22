import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data:any;
  constructor() { }

  ngOnInit(): void {
    this.data=this.getData();
  }
  getData(){
    return[
      {
        "_id":"1",
        "name":"kameswari1"
      },
      {
        "_id":"2",
        "name":"kameswari2"
      },
      {
        "_id":"3",
        "name":"kameswari3"
      }
    ]
  }
}
