import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserProfile } from '../../interfaces/i-user-profile';
import { ICompanyProfile } from '../../interfaces/i-company-profile';
import { IAdminProfile } from '../../interfaces/i-admin-profile';

@Injectable({
  providedIn: 'root',
})
export class BlProfileApiService {
  constructor(private http : HttpClient){}

  getProfileInfo() : Observable<IUserProfile | ICompanyProfile | IAdminProfile>
  {
    return this.http.get<IUserProfile | ICompanyProfile | IAdminProfile>("/api/profile");
  }

}
