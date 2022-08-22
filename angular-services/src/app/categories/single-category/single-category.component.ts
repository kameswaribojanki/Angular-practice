import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from "src/app/categories/models/ICategory";
import { CategoryService } from 'src/app/categories/services/category.service';
import { CategoryComponentEnum } from 'src/app/categories/models/CategoryComponent.enum';
@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  @Input() category!: ICategory;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }
  onViewCategory(){
    this.categoryService.selectedCategory=this.category;
    this.categoryService.selectedComponentEvent.emit(CategoryComponentEnum.viewCategory);
  }
  onEditCategory(){
    this.categoryService.selectedCategory=this.category;
    this.categoryService.selectedComponentEvent.emit(CategoryComponentEnum.editCategory);
  }
  onDeleteCategory(){
   
    this.categoryService.selectedCategory=this.category;
    this.categoryService.deleteCategory(this.category);
    this.categoryService.selectedComponentEvent.emit(CategoryComponentEnum.categories);

    // let index=this.categoryService.categories.indexOf(this.category);
    // console.log(index);
    // this.categoryService.categories.splice(index,1);
  }

}
