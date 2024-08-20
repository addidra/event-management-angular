import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'] // 'styleUrl' should be 'styleUrls'
})
export class RegistrationComponent {
  email:string;
  registrationForm: FormGroup

  constructor(private userService:UserService, private formBuilder:FormBuilder){
    this.email = this.userService.userEmail;
    this.registrationForm = formBuilder.group({
      fullName:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })

  }

  onSubmit() {
    console.log("YOO");
  }

}
