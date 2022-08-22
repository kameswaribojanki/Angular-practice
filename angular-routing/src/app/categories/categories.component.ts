import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactivate } from '../guards/deactivate-guard.service';
import { ICategory } from '../models/ICategory';
import { CategoryService } from '../services/Category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, IDeactivate {
  hello:string='';
  categories:ICategory[]=[];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      console.log(data);
    })
    // this.categories=this.categoryService.categories;
  }
  canExit(){
    if(confirm('are you sure you want to exit')){
      return true;
    }
    return false;
  }
}
