import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UserSuccessComponent } from './user-success/user-success.component';
import { SharedModule } from '../shared/shared.module';
import { BookNowComponent } from './book-now/book-now.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    UserlandingComponent,
    UserSuccessComponent,
    BookNowComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class UserModule { }
