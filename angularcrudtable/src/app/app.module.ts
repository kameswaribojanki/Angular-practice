import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    FormComponent,
    SingleCategoryComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
