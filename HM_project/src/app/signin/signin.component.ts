import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signInForm! : FormGroup;
  journey: any;
  data:any
  apicallService: any;
 constructor(private formBuilder:FormBuilder){

 }
 ngOnInit(){
  this.journey = this.apicallService.journey; //user/admin/owner
  this.getData()
  this.formDetails()
 }
  
  
 formDetails(){
  this.signInForm = this.formBuilder.group({
    UserName:['',[Validators.required]],
    password:[]
  })
 }

submit(){

}

getData(){
  this.apicallService.getApicall(this.journey).subscribe((Response: any)=>{
    this.data = Response  ;
      console.log('this.data',this.data);
    
  })
}
}
