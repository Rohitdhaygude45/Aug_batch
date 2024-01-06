import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : "login" , component : LoginComponent},
  { path : "signUp" , component : SignUpComponent},
  { path : "dataBinding", component: DatabindingComponent},
  { path : "directives", component:DirectivesComponent},
  { path: "lifecycleHooks", component: LifecyclehooksComponent},
  
  { path: "parent", component:ParentComponent},
  { path: "child", component: ChildComponent},
  

  

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
