import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserValidators} from './user.validators'
@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  myForm = new FormGroup({
    username: new FormControl('',Validators.required,UserValidators.usernameexists),
    password: new FormControl('',Validators.required),
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  get username(){
    return this.myForm.get('username');
  }

  get password(){
    return this.myForm.get('password');
  }

  onLogin(){
    this.myForm.setErrors({
      invalidLogin:true
    })
  }

}
