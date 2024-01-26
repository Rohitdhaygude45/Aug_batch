import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../shared/apicall.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
  signUpForm! : FormGroup;
  
  name1!: string;
  isMatch:boolean = false;
  showPassword = false;
  showConfirmPassword=false;
  endpoint : any;

  constructor(private formBuilder:FormBuilder,
    public apicallService:ApicallService ,private router:Router){}

    
  
  ngOnInit(){
     this.apicallService
     this.endpoint = this.apicallService.journey;
   this.formDetails();

  }


  formDetails(){
   this. signUpForm = this.formBuilder.group({
    userName:['',[Validators.required]],
    password:[],
    comnfirmPassword:[],
    pan:[],
    city:[],
    email:[],
    mobileNo:[],
    gender:[]
    

   })
  }

  matchPassword(){
    if(this.signUpForm.value.confirmPass != ''){
      if(this.signUpForm.value.password == this.signUpForm.value.confirmPass){
        this.isMatch = false;
      }else{
        this.isMatch = true;
      }
    }
   
  }
  showPass(){
    this.showPassword =  !this.showPassword;
  }
  showConfirmPass(){
    this.showConfirmPassword =  !this.showConfirmPassword;
  }
  
  submit(){
  this.apicallService.postApiCall(this.endpoint, this.signUpForm.value).subscribe(respo=>{
     //this.router.navigateByUrl('/owner/ownerSuccess')
     if(this.endpoint === 'admin'){
    this.router.navigateByUrl('/admin/adminSuccess')
  }
  
   else if (this.endpoint ==='owner'){
    this.router.navigateByUrl('/owner/ownerSuccess')
   }
    else{
      this.router.navigateByUrl('/user/useSucces')
    }
  })


}
}