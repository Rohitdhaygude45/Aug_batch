import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { SigninComponent } from '../admin/signin/signin.component';

const routes: Routes = [
 {path :'adminlanding',component:AdminlandingComponent},
 {path : 'adminsignin',component:SigninComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
