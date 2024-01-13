import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { SignUpReactiveFormComponent } from './sign-up-reactive-form/sign-up-reactive-form.component';
import { SearchPipe } from './search.pipe';
import { Viewchild1Component } from './viewchild1/viewchild1.component';
import { Viewchild2Component } from './viewchild2/viewchild2.component'


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
    SubComponent,
    Sub1Component,
    Sub2Component,
    TemplatedrivenformComponent,
    SignUpReactiveFormComponent,
    SearchPipe,
    Viewchild1Component,
    Viewchild2Component,
    

    
  ],
  imports: [  //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

   

    

  ],
  providers: [],
  bootstrap: [AppComponent]
  

})
export class AppModule { }

    

 
