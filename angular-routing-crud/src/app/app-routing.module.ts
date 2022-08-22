import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { DeactivateGuardService } from './guards/deactivate-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'users', component:UsersComponent, canActivate:[AuthGuardService]},
  {path:'aboutus', component:AboutUsComponent,canActivate:[AuthGuardService]},
  {path:'adduser', component:AddUserComponent},
  {path:'edituser/:id', component:EditUserComponent, canDeactivate:[DeactivateGuardService]},
  // {path:"delete/:id",component:SingleUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
