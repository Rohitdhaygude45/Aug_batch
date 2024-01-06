import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'


@NgModule({
  declarations: [ //component/pipe/directive
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    DatabindingComponent,
    DirectivesComponent,
    LifecyclehooksComponent,
    ParentComponent,
    ChildComponent,
    

    
  ],
  imports: [  //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule

   

    

  ],
  providers: [],
  bootstrap: [AppComponent]
  

})
export class AppModule { }

    

 
