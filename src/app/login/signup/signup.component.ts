import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { signupModel } from 'src/app/Models/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm : FormGroup
  signupModel: signupModel[] = []
  bundobustSignup: any;

  constructor(private router: Router, private service: SignupService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required)
    });
  }

  signup() {
    this.bundobustSignup = {
      firstname: this.registerForm.get('firstname').value,
      lastname: this.registerForm.get('lastname').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      confirmpassword: this.registerForm.get('confirmpassword').value,
    }
    this.service.userRegister(this.bundobustSignup).subscribe(data => {
      console.log(data)
    });
    this.router.navigateByUrl("/signin")
  }

}
