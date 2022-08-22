import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SampleComponent } from './sample/sample.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserTwoWayComponent } from './add-user-two-way/add-user-two-way.component';
import {FormsModule} from '@angular/forms';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UsersDataComponent } from './users-data/users-data.component';
import { CategoriesDataComponent } from './categories-data/categories-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SampleComponent,
    AddUserComponent,
    AddUserTwoWayComponent,
    CreateCategoryComponent,
    UsersDataComponent,
    CategoriesDataComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
