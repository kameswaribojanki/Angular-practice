import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:ICategory[]=[
    {id:1,title:"title1",description:"description"}
  ];
  selectedCategory:ICategory | null = null;
  updatedCategoryDetails:ICategory | null = null;
  constructor() { }

  ngOnInit(): void {
  }
  onAddCategory(category:ICategory){
    category.id=this.categories.length+1;
    this.categories.push(category);
  }
  onCategorySelected(category:ICategory){
    this.selectedCategory=category;
    this.updatedCategoryDetails=null;
  }
  onCategoryUpdated(category:ICategory){
    this.updatedCategoryDetails=category;
    this.selectedCategory=null;
  }
  onUpdateCategory(category:ICategory){
    this.categories=this.categories.map(categori=>{
      if(category.id===categori.id){
        return category;
      }
      return categori;
    })
  }
}
