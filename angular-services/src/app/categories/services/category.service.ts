import { Injectable, Output, EventEmitter } from "@angular/core";
import { ICategory } from "src/app/categories/models/ICategory";
import { CategoryComponentEnum } from "src/app/categories/models/CategoryComponent.enum";
@Injectable({
    providedIn:'root'
})
export class CategoryService{
    categories:ICategory[]=[
        {id:1, title:"title", description:"description"}
    ];
    @Output() selectedComponentEvent=new EventEmitter<CategoryComponentEnum>();
    selectedCategory:ICategory | null = null;
    constructor(){

    }
    addCategory(category:ICategory){
        if (!category.id) category.id=this.categories.length+1;
        this.categories.push(category);
    }
    getCategories(){

    }
    editCategory(category:ICategory){
        this.categories=this.categories.map(cat=>{
            if(cat.id===category.id){
                return category;
            }
            return cat;
        })
    }
    getCategoryById(){
        
    }
    deleteCategory(category:ICategory){
        let index=this.categories.indexOf(category);
        this.categories.splice(index,1);
        console.log(this.categories);
    }
}