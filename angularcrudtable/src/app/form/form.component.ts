import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 title:string="";
 description:string="";
  constructor() { }

  ngOnInit(): void {
  }
  saveToTable(){
    console.log(this.title+""+this.description);
    
  }
}
