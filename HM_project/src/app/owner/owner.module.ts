import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { SharedModule } from '../shared/shared.module';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { HotelRegisterComponent } from './hotel-register/hotel-register.component';



@NgModule({
  declarations: [
    OwnerlandingComponent,
    OwnerSuccessComponent,
    HotelRegisterComponent,

  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
    
  ]
})
export class OwnerModule { }
