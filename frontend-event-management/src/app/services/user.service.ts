import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  userEmail=''
  passEmail(email:string) {
    this.userEmail = email;
  }
}
