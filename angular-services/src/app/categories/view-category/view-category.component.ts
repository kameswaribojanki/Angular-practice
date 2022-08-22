import { Component, OnInit } from '@angular/core';
import { ICategory } from "src/app/categories/models/ICategory";
import { CategoryService } from 'src/app/categories/services/category.service';
import { CategoryComponentEnum } from 'src/app/categories/models/CategoryComponent.enum';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  category!:ICategory;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    if(this.categoryService.selectedCategory){
      this.category=this.categoryService.selectedCategory;
    }
  }

  onBack(){
    this.categoryService.selectedComponentEvent.emit(CategoryComponentEnum.categories);
  }

}
