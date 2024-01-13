import { Component } from '@angular/core';
import { FormBuilder, formGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up-reactive-form',
  templateUrl: './sign-up-reactive-form.component.html',
  styleUrls: ['./sign-up-reactive-form.component.css']
  
})
export class SignUpReactiveFormComponent {

  signUpForm!: formGroup;
  show:boolean=false;
  showPassword :boolean=false;
  constructor(private formBuilder: FormBuilder) { }

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
  submit(){
    console.log(this.signUpForm.value);
    
  }

  toShowPassword(){
    //  this.showPassword= true;
    //  this.show = true
    this.showPassword = !this.showPassword;
    this.show = !this.show ;
  }
}
