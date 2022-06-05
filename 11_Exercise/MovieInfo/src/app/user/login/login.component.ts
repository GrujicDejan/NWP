import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //iskoristiti servis za registraciju
  constructor() { }

  public username: string = '';
  public password: string = '';
  ngOnInit(): void {
  }

  login() {
    
  }
}
