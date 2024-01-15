import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { SigninComponent } from './signin/signin.component';
console.log("admin calling...");


@NgModule({
  declarations: [
    AdminlandingComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
