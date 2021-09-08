import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root' // kad je root modul onda ne mora da se ubaci u providers
})
export class RegisterService {//ova klasa mora biti u app.module.ts

  constructor(private http: HttpClient) { }

  registerUser(fullname, email, password): Observable<any> { //The HTTP module uses observables to handle AJAX requests and responses.
    return this.http.post(`${BASEURL}/signup/user`, {
      fullname: fullname,
      email: email,
      password: password
    });
  }

  loginUser(email, password): Observable<any>{
    return this.http.post(`${BASEURL}/login/user`,{
      email: email,
      password: password
    });
  }
}

