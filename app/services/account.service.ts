import { Injectable } from '@angular/core';
import { UserModule } from '../login/user.module';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  loggedIn=false;

  login(user:UserModule):boolean{

    if(user.userName=="engin"&&user.password=="12345"){
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.userName);
      return true;

    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn
  }

  logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}


