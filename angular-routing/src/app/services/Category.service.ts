import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CategoryService{
    categories:{id:number, name:string}[]=[
        {id:1, name:'kameswari'},
        {id:2, name:'Ganesh'}
    ]
}