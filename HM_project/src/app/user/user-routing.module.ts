import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookNowComponent } from './book-now/book-now.component';
import { UserSuccessComponent } from './user-success/user-success.component';
import { UserlandingComponent } from './userlanding/userlanding.component';

const routes: Routes = [ 
  {path:'userLanding', component:UserlandingComponent},
  { path:'userSuccess',component:UserSuccessComponent},
  { path:'bookNow',component:BookNowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }




