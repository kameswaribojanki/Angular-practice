import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor() { }
  title:string="";
  description:string="";
  showForm:boolean=false;
  selectedCategory:ICategory | null = null;
  editedCategory:ICategory | null = null;
  categories:ICategory[]=[];
  showTable:boolean=false;
  showButton:boolean=true;
  showViewCondition:boolean=true;
  showEditCondition:boolean=true;
  ngOnInit(): void {
  }
  onAddCategorySelect(){
    this.showForm=true;
  }
  onCategoryAdd(category:ICategory){
    category.id=this.categories.length+1;
    this.categories.push(category);
    this.showForm=false;
    this.showTable=true;
  }
  onCategorySelected(category:ICategory){
    this.selectedCategory=category;
    this.editedCategory=null;
    this.showTable=false;
    this.showButton=false;
  }
  onCategoryEdited(category:ICategory){
    this.editedCategory=category;
    this.selectedCategory=null;
    this.showTable=false;
  }
  onUpdateCategory(category:ICategory){
    this.categories=this.categories.map(categori=>{
      if(category.id===categori.id){
        return category;
      }
      return categori;
    })
  }
  onCategoryDeleted(category:ICategory){
    for(let i=0;i<this.categories.length;i++){
      if(category.id===this.categories[i].id){
        this.categories.splice(i,1);
      }
      //console.log(this.categories[i].id)
      //this.categories=this.categories.splice(i,1);
    }
    this.editedCategory=null;
    this.selectedCategory=null;
  }
  hideViewShowTable(boolValue:boolean){
    this.showViewCondition=boolValue;
    this.showTable=true;
    this.showButton=true;
  }
  hideEditShowTable(boolValue:boolean){
    this.showEditCondition=boolValue;
    this.showTable=true;
    this.showButton=true;
  }
}
