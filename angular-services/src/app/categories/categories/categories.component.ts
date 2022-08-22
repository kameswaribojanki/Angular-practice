import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/categories/services/category.service';
import { ICategory } from "src/app/categories/models/ICategory";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories!:ICategory[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    // this.categoryService.selectedComponentEvent.subscribe(data => {
    //   this.categories=this.categoryService.categories;
    // })
    this.categories=this.categoryService.categories;
  }

}
