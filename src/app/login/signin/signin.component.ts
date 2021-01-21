import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // signinForm: FormGroup;
  // signinDetails: any;
  isSigninMode = true;
  isLoading = false;
  error: string = null;

  constructor(private router: Router, private signinService: SigninService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.signinForm = this.fb.group({
    //   id: new FormControl('', Validators.required),
    //   password: new FormControl('', Validators.required)
    // })
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const id = form.value.id;
    const password = form.value.password;

    let siginObs: Observable<AuthResponseData>;

    this.isLoading = true;
    siginObs = this.signinService.userSignin(id, password);

    siginObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    form.reset();
  }

  // onHandleError() {
  //   this.error = null;
  // }

  signup() {
    this.router.navigateByUrl("/signup")
  }

}
