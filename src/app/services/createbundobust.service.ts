import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreatebundobustService {

  constructor(private http: HttpClient) { }

  public createBundobust(create: any): Observable<any>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', create, { headers:  httpHeaders});
  }
}
