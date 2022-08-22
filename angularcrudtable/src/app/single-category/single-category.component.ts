import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
@Component({
  selector: '[app-single-category]',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  @Input() category!:ICategory;
  @Output() categorySelected=new EventEmitter<ICategory>();
  @Output() categoryEdited=new EventEmitter<ICategory>();
  @Output() categoryDeleted=new EventEmitter<ICategory>();
  constructor() { }

  ngOnInit(): void {
  }
  onCategorySelect(){
    this.categorySelected.emit(this.category);
  }
  onCategoryEdited(){
    this.categoryEdited.emit(this.category);
  }
  onCategoryDeleted(){
    this.categoryDeleted.emit(this.category);
  }
}
