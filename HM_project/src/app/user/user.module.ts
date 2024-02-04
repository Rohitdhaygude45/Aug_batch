import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UserSuccessComponent } from './user-success/user-success.component';
import { SharedModule } from '../shared/shared.module';
import { BookNowComponent } from './book-now/book-now.component';


@NgModule({
  declarations: [
    UserlandingComponent,
    UserSuccessComponent,
    BookNowComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
