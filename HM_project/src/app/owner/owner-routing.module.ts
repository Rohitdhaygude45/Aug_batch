import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelRegisterComponent } from './hotel-register/hotel-register.component';

import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';

const routes: Routes = [
  {path :'ownerLanding',component:OwnerlandingComponent},
  { path : 'ownerSuccess',component:OwnerSuccessComponent},
   { path :'hotelRegister',component:HotelRegisterComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
