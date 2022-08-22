import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ICategory } from "../models/ICategory";
import { CategoryService } from "../services/Category.service";
@Injectable({
    providedIn:'root'
})
export class CategoryResolverService implements Resolve<ICategory[]>{
    constructor(private categoryService:CategoryService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ICategory[] | Observable<ICategory[]> | Promise<ICategory[]> {
        let categories=this.categoryService.categories;
        return categories;
    }
}