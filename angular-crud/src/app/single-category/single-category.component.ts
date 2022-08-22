import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  @Input() category:ICategory | null = null;
  @Output() categorySelected=new EventEmitter<ICategory>();
  @Output() categoryUpdated=new EventEmitter<ICategory>();
  constructor() { }

  ngOnInit(): void {
  }
  onCategoryView(){
    this.category && this.categorySelected.emit(this.category);
  }
  onCategoryEdit(){
    this.category && this.categoryUpdated.emit(this.category);
  }
}
