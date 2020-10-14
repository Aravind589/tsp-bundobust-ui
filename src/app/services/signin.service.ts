import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http : HttpClient) { }

  public userSignin(create: any): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:8080/api/user/signin', create, {headers : httpHeaders});
  }
}
