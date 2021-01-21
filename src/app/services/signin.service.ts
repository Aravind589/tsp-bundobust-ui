import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
// import { clearTimeout } from 'timers';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../login/signin/sigin.model';

export interface AuthResponseData {
  id: string;
  email: string;
  role: string;
  refreshToken: string;
  expiresIn: string;
  idToken: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  userSignin(id: number, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Version': '1.0'
      })
    }
    return this.http.post<AuthResponseData>('http://localhost:8080/api/auth/employee/signin',
      {
        id: id,
        password: password,
        returnSecureToken: true
      }, httpOptions).pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication(
          resData.id,
          resData.localId,
          resData.idtoken,
          +resData.expiresIn
        );
      }));
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _accessToken: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._accessToken,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoSignout(expirationDuration);
    }
  }

  signout() {
    this.user.next(null);
    // this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoSignout(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.signout();
    }, 1000);
  }


  private handleAuthentication(
    id: string,
    userId: string,
    accessToken: string,
    expiresIn: number) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000
    );
    const user = new User(
      id,
      userId,
      accessToken,
      expirationDate
    );
    this.user.next(user);
    this.autoSignout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'ID_EXISTS':
        errorMessage = 'This Id exists already';
        break;
      case 'ID_NOT_FOUND':
        errorMessage = 'This Id does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}
