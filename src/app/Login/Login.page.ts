import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-home",
  templateUrl: "Login.page.html",
  styleUrls: ["Login.page.scss"]
})
export class LoginPage {
  constructor(private formBuilder: FormBuilder) {}
  
  get email() {
    return this.registrationForm.get('email');
  }

  
  get password() {
    return this.registrationForm.get('password.password');
  }
  get retype() {
    return this.registrationForm.get('password.retype');
  }
  
  public errorMessages = {
   
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
   
    
    password: [
      { type: 'required', message: 'password is required' },
      {
        type: 'maxlength',
        message: 'password cant be longer than 100 characters'
      }
    ],
    retype: [
      { type: 'required', message: 'password is required' },
      {
        type: 'maxlength',
        message: 'password cant be longer than 100 characters'
      }
    ],
   
  };
  registrationForm = this.formBuilder.group({
  
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    
    password: this.formBuilder.group({
      password: ['', [Validators.required, Validators.maxLength(100)]],
      retype: ['', [Validators.required, Validators.maxLength(100)]],
      z: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]
      ]
    })
  });
  public submit() {
    console.log(this.registrationForm.value);
  }
}