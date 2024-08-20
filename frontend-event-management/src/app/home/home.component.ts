import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink,Router } from '@angular/router';
import {FormsModule,FormControl,  ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  login() {
    this.router.navigateByUrl('login')
    this.userService.passEmail(this.emailFormControl.value as string)
  }
  constructor(private userService:UserService,private router:Router){}
  emailFormControl = new FormControl('',[Validators.required,Validators.email])
  validateEmail(){
    if(this.emailFormControl.invalid){
      this.emailFormControl.markAsTouched();
    } else {
      const email = this.emailFormControl.value as string;
      this.userService.passEmail(email)
      this.router.navigateByUrl('/register')
    }
  }
}
