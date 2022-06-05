import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


//treba iskoristit servis
  constructor() { }

  public username: string = '';
  public password: string = '';
  ngOnInit(): void {
  }

  register() {
  }

}
