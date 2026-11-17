import { Injectable } from '@angular/core';
import { BlRegisterUserApiService } from './bl-register-user-api.service';
import { IRegisterUser } from '../../interfaces/i-register-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlRegisterUserRequestService {
constructor (private apiService : BlRegisterUserApiService){}

  register(dataToSend : IRegisterUser): Observable<any>
  {
    return this.apiService.register(dataToSend);
  }
}
