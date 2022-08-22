import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/models/ICategories';

@Component({
  selector: 'app-categories-data',
  templateUrl: './categories-data.component.html',
  styleUrls: ['./categories-data.component.css']
})
export class CategoriesDataComponent implements OnInit {
  categories:ICategories[]=[
    {id:1,categoryName:'category1'},
    {id:2,categoryName:'category1'},
    {id:3,categoryName:'category1'},
    {id:4,categoryName:'category1'},
    {id:5,categoryName:'category1'},
    {id:6,categoryName:'category1'},
    {id:7,categoryName:'category1'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onAddCategory(){
    let categories=this.categories.map((category)=>{
      return {...category};
    })
    categories.push({
      id:categories.length+1,
      categoryName:`category ${categories.length+1}`
    });
    this.categories=categories;
  }
  trackUser(index:number, category:ICategories){
    return category?category.id:undefined;
  }
}
