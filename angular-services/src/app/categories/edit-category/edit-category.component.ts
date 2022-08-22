import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/categories/services/category.service';
import { CategoryComponentEnum } from 'src/app/categories/models/CategoryComponent.enum';
import { ICategory } from 'src/app/categories/models/ICategory';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  title="";
  description="";
  category:ICategory | null = null;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.category=this.categoryService.selectedCategory;
    if(this.category){
      this.title=this.category.title;
      this.description=this.category.description;
    }
  }
  goBack(){
    this.categoryService.selectedComponentEvent.emit(CategoryComponentEnum.categories);
  }
  onUpdateCategory(){
    let category={
      id:this.category?.id,
      title:this.title,
      description:this.description
    }
    this.categoryService.editCategory(category);
    this.goBack();
  }
}
