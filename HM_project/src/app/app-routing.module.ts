import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



import { LandingComponent } from './landing/landing.component';
const routes: Routes = [ 
{ path: "", component: LandingComponent },
{ path: "landing", component: LandingComponent },
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{ path : 'signIn' , component: SigninComponent},
{ path : 'signUp' , component: SignupComponent},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
