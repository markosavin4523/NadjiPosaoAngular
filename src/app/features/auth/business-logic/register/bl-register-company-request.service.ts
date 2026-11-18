import { Injectable } from '@angular/core';
import { BlRegisterCompanyApiService } from './bl-register-company-api.service';
import { IRegisterCompany } from '../../interfaces/i-register-company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlRegisterCompanyRequestService {
  constructor(private service : BlRegisterCompanyApiService) {}

  register(dataToSend : IRegisterCompany) : Observable<any>
  {
    return this.service.register(dataToSend);
  }
}
