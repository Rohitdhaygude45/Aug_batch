import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { SharedModule } from '../shared/shared.module';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { HotelRegisterComponent } from './hotel-register/hotel-register.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    OwnerlandingComponent,
    OwnerSuccessComponent,
    HotelRegisterComponent,

  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
    
  ]
})
export class OwnerModule { }
