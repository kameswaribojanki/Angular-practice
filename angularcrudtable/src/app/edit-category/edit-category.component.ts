import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @Input() category!:ICategory;
  @Output() categoryUpdated = new EventEmitter<ICategory>();
  @Output() goToCategory=new EventEmitter<boolean>();
  title:string="";
  description:string="";
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(){
    this.title=this.category.title;
    this.description=this.category.description;
  }
  onUpdateCategory(){
    let category:ICategory={
      id:this.category.id,
      title:this.title,
      description:this.description
    }
    this.categoryUpdated.emit(category);
  }
  goBack(){
    this.goToCategory.emit(false);
  }
}
