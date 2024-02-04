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
  isValidUser: any;
  notValidUser:boolean =false;
  userName:any;

  
 constructor(private formBuilder:FormBuilder,
  private apicallService:ApicallService,private router:Router){

 }
 ngOnInit(){
   this.journey = this.apicallService.journey; //user/admin/owner
  //this.journey='owner';
  this.getData();
  this.formDetails()
 }
  
  
 formDetails(){
  this.signInForm = this.formBuilder.group({
    fullName:['',[Validators.required]],
    password:[]
  })
 }

submit(){
  //this.validUser=[]
  let isValidUser = false;
  this.data.find((ele:any)=>{
    if (this.signInForm.value.fullName == ele.fullName && this.signInForm.value.password == ele.password){
      //this.validUser.push(ele);
      isValidUser =true;
    }
  })
   
   if(isValidUser){
    this.apicallService.userName = this.signInForm.value.fullName;
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
  this.apicallService.getApiCall(this.journey).subscribe(respo=>{
    this.data =respo;
    console.log('this.data',this.data);
  })
}
}

