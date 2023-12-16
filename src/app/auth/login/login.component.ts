import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  ngOnInit(): void {

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-ee" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  userName: string = '';
  password: string = '';
  
  constructor(private loginService: SharedService, private router: Router) {}

  login(): void {
    this.loginService.login(this.userName, this.password).subscribe(
      (response) => {
        console.log('Login Successful:', response);
        // Redirect to the desired page after successful login
        this.router.navigate(['/read']);
      },
      (error) => {
        console.error('Login Error:', error);
        // Handle error, e.g., show a message to the user
      }
    );
  }
  }
