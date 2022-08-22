import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { CategoriesComponent } from "./categories/categories.component";
import { EditUsersComponent } from "./edit-users/edit-users.component";
import { AuthGuardChildService } from "./guards/auth-guard-child.service";
import { AuthGuardService } from "./guards/auth-guard.service";
import { CategoryResolverService } from "./guards/category-resolver.service";
import { DeactivateGuardService } from "./guards/deactivate-guard.service";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { UserFilterComponent } from "./user-filter/user-filter.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes:Routes=[
    {path:'', component:HomeComponent},
    {path:'aboutus', component:AboutUsComponent},
    {path:'categories', component:CategoriesComponent, resolve:{categories:CategoryResolverService},canDeactivate:[DeactivateGuardService]},
    // {path:'user/:id/:name', component:UserComponent},
    {path:'users', component:UsersComponent, canActivate:[AuthGuardService], canActivateChild:[AuthGuardService], children:[{path:':id/:name', component:UserComponent},{path:':id/:name/edit', component:EditUsersComponent, canDeactivate:[DeactivateGuardService]}]},
    {path:'not-found', component:NotFoundComponent},
    {path:'reactiveform', component:ReactiveFormComponent},
    {path:'userfilter',component:UserFilterComponent},
    {path:'**', redirectTo:'not-found'}
    
  ]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}