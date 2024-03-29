import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private account:AccountService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.account.isLoggedIn();
  }

  logout(){
    this.account.logout();

  }

}
