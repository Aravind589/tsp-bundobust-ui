import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  signinDetails: any;

  constructor(private router: Router, private service: SigninService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  signin() {
    this.signinDetails = {
      email: this.signinForm.get('email').value,
      password: this.signinForm.get('password').value
    }
    this.service.userSignin(this.signinDetails).subscribe(data => {
      console.log(data)
    });
  }

  onClick(){
    this.router.navigateByUrl("/home")
  }

  signup() {
    this.router.navigateByUrl("/signup")
  }

}
