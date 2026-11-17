import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterUser } from '../../interfaces/i-register-user';

@Injectable({
  providedIn: 'root',
})
export class BlRegisterUserApiService {
  constructor(private http : HttpClient){}

  register(dataToSend : IRegisterUser) : Observable<any>
  {
    return this.http.post("/api/register/user", dataToSend);
  }
}
