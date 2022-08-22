import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserFilterComponent } from './user-filter/user-filter.component';

// const appRoutes:Routes=[
//   {path:'', component:HomeComponent},
//   {path:'aboutus', component:AboutUsComponent},
//   {path:'categories', component:CategoriesComponent},
//   // {path:'user/:id/:name', component:UserComponent},
//   {path:'users', component:UsersComponent, children:[{path:':id/:name', component:UserComponent},{path:':id/:name/edit', component:EditUserComponent}]},
//   {path:'not-found', component:NotFoundComponent},
//   {path:'**', redirectTo:'not-found'}
  
// ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CategoriesComponent,
    NavigationComponent,
    UserComponent,
    UsersComponent,
    NotFoundComponent,
    EditUsersComponent,
    ReactiveFormComponent,
    UserFilterComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
