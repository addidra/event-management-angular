import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,MatButtonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-event-management';
}
