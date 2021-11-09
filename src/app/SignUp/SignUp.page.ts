import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-home",
  templateUrl: "SignUp.page.html",
  styleUrls: ["SignUp.page.scss"]
})
export class SignUpPage {
  constructor(private formBuilder: FormBuilder) {}
  get name() {
    return this.registrationForm.get("name");
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get phone() {
    return this.registrationForm.get('phone');
  }
  
  get password() {
    return this.registrationForm.get('password.password');
  }
  get retype() {
    return this.registrationForm.get('password.retype');
  }
  
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    phone: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'pattern', message: 'Please enter a valid phone number' }
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
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
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