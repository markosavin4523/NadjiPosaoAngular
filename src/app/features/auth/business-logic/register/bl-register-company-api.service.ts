import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterCompany } from '../../interfaces/i-register-company';

@Injectable({
  providedIn: 'root',
})
export class BlRegisterCompanyApiService {
  constructor(private http : HttpClient){}

  register(dataToSend : IRegisterCompany) : Observable<any>
  {
    return this.http.post("/api/register/company", dataToSend);
  }
}
