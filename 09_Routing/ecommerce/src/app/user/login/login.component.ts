import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  hide = true;

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(resp => {
      alert("Successfully logged in");
      localStorage.setItem("token", resp.token);
      this.router.navigate(['product/list']);
    }, err => {
      alert("Error");
    })
  }

}
