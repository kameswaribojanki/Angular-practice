import { Component } from '@angular/core';
import { CategoryComponentEnum } from 'src/app/categories/models/CategoryComponent.enum';
import { CategoryService } from 'src/app/categories/services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-services';
  selectedComponent=CategoryComponentEnum.categories;
  constructor(private categoryService:CategoryService){

  }
  ngOnInit(){
    this.categoryService.selectedComponentEvent.subscribe(data=>{
      this.selectedComponent=data;
      
    })
  }
  onAddCategory(){
    this.selectedComponent=CategoryComponentEnum.addCategory;
  }
}
