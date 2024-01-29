import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../shared/apicall.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signInForm! : FormGroup;
  journey: any;
  data:any;
  validUser: any;
  notValidUser:boolean =false;

  
 constructor(private formBuilder:FormBuilder,
  private apicallService:ApicallService,private router:Router){

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
  this.validUser=[]
  this.data.find((ele:any)=>{
    if (this.signInForm.value.UserName == ele.fullName && this.signInForm.value.password == ele.password){
      this.validUser.push(ele);
    }
  })
   
   if(this.validUser.length > 0){
    if (this.journey =='admin'){
      this.router.navigateByUrl('/admin/adminSuccess')
    }
    else if(this.journey =='user'){
      this.router.navigateByUrl('/user/userSuccess')
    }
    else{
      this.router.navigateByUrl('/owner/ownerSuccess')
    }

   } 
   else{
    this.notValidUser =true;
   }
}
getData(){
  this.apicallService.getApiCall(this.journey).subscribe((respo: any)=>{
    this.data =respo;
    console.log('this.data',this.data);
  })
}

  }

