import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/categories/services/category.service';
import { CategoryComponentEnum } from 'src/app/categories/models/CategoryComponent.enum';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  title="";
  description="";
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }
  onAddCategory(){
    let category={
      title:this.title,
      description:this.description
    }
    this.categoryService.addCategory(category);
    this.categoryService.selectedComponentEvent.emit(CategoryComponentEnum.categories);
  }
  goBack(){
    this.categoryService.selectedComponentEvent.emit(CategoryComponentEnum.categories);
  }
}
