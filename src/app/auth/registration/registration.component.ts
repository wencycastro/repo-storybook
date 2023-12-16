import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

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

  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private sharedService: SharedService, private registrationService: SharedService) {
    this.registrationForm = this.fb.group({});
    this.validationErr();
  }
validationErr() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)], ],
    });
  }
 onSubmit(event: Event) {
    event.preventDefault();
  
    this.registrationService.registerUser(this.registrationForm.value).subscribe(
      (response) => {
        console.log('Registration response', response);

      },
      (error) => {
        console.error('Registration failed', error);

  
        if (error && error.error) {
          if (error.status === 400) {
            // Handle validation errors (e.g., invalid email format, etc.)
            console.error('Validation errors:', error.error.errors);
          } else {
            console.error('Server error message:', error.error.message);
          }
        }
      }
    );
  }
  

}
