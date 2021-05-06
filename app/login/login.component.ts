import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { UserModule } from './user.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usermodel:UserModule=new UserModule;
  constructor(private account:AccountService) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    this.account.login(this.usermodel);

  }

}
