import { NgIf,NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators,FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { noSpace } from '../validators/nospace.validators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form:any;
  isPasswordVisible: boolean= false;
  emailRegex: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
  constructor(private userService:UserService,private formBuilder:FormBuilder){
    this.form = formBuilder.group({
      userName: ["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(8),noSpace.noSpaceValidation]],
    })
  }

  get fc () {
    return this.form.controls
  }

  togglePasswordVisiblity(){
    this.isPasswordVisible = !this.isPasswordVisible
  }

  onSubmit(){
    console.log(this.fc.userName.value, this.fc.password.value)
  }
}
