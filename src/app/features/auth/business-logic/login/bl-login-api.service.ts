import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICredentials, ILoginResponse } from '../../interfaces/icredentials';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlLoginApiService {
  constructor(private httpClient : HttpClient) {}

  login(data: ICredentials) : Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>('/api/auth', data);
  }
}
