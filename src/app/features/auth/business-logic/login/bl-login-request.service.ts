import { Injectable } from '@angular/core';
import { BlLoginApiService } from './bl-login-api.service';
import { ICredentials, ILoginResponse } from '../../interfaces/icredentials';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlLoginRequestService {
  constructor(private apiService : BlLoginApiService) {

  }

  login (data : ICredentials) : Observable<ILoginResponse> {
    return this.apiService.login(data);
  }
}
