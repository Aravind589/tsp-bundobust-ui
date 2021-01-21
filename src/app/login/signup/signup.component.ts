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

  registerForm: FormGroup
  signupModel: signupModel[] = []
  bundobustSignup: any;

  constructor(private router: Router, private service: SignupService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      officeType: new FormControl('', Validators.required),
      // districtName: new FormControl('', Validators.required),
      sdpoName: new FormControl('', Validators.required),
      divisionName: new FormControl('', Validators.required),
      circleName: new FormControl('', Validators.required),
      // policeStationName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  signup() {
    this.bundobustSignup = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      role: [
        this.registerForm.get('role').value
      ],
      officeType: this.registerForm.get('officeType').value,
      // districtName: this.registerForm.get('districtName').value,
      sdpoName: this.registerForm.get('sdpoName').value,
      divisionName: this.registerForm.get('divisionName').value,
      circleName: this.registerForm.get('circleName').value,
      // policeStationName: this.registerForm.get('policeStationName').value,
      email: this.registerForm.get('email').value,
      id: this.registerForm.get('id').value,
      password: this.registerForm.get('password').value,
    }
    this.service.userRegister(this.bundobustSignup).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl("/signin")
    });
  }
}
