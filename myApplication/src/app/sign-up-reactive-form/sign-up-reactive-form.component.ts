import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sign-up-reactive-form',
  templateUrl: './sign-up-reactive-form.component.html',
  styleUrls: ['./sign-up-reactive-form.component.css']
  
})
export class SignUpReactiveFormComponent {

  signUpForm!: FormGroup;
  show:boolean=false;
  showPassword :boolean=false;
  misMatch: boolean | undefined;
   postApiResponse: any;



  
  constructor(private formBuilder: FormBuilder,private dataService :DataService,private router:Router ) { }

  ngOnInit() {
    this.formLoad()
  }


  formLoad() {

     this.signUpForm = this.formBuilder.group({
      name : ['',[Validators.required]],
      mobile : [,[Validators.maxLength(10)]],
      pancard:['',[Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$'),Validators.maxLength(10)]],
      email:[''],
      pass:[''],
      confirmPass:['']
     })
  }

   spaceNotAllowed(inputVal:any){
    const value =inputVal.value;
    let isIncludeSpace =/\s{2,}/.test(value);
    return isIncludeSpace ? {spaceNotAllowed:true} : null;
   }
   passwordMatchValidator(){

    const password =this.signUpForm.get('pass')?.value;
    const confirmPassword = this.signUpForm.get ('confirmPass ')?.value;



    if (password !=confirmPassword){
      this.misMatch=true;

    }
    else{
      this.misMatch=false;
    }
   }


   confirmPasswordMatch(){

  }


 
 async submit(): Promise<void>{
  let endPoint='user';
  console.log(this.signUpForm.value);
  this.postApiResponse = await this.dataService.postApiCall(endPoint,this.signUpForm.value).toPromise()

 if( this.postApiResponse?.id){
  this.router.navigateByUrl('');
 }
 else{
  this.router.navigateByUrl('signUpForm');
 }
 }



  toShowPassword(){
    //  this.showPassword= true;
    //  this.show = true
    this.showPassword = !this.showPassword;
    this.show = !this.show ;
  }
}
