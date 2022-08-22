import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";
const appRoutes:Routes=[
    {path:'', component:HomeComponent},
    {path:'posts', component:PostsComponent},
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}