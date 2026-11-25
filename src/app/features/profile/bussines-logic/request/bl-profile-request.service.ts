import { Injectable } from '@angular/core';
import { BlProfileApiService } from '../api/bl-profile-api.service';
import { Observable } from 'rxjs';
import { IUserProfile } from '../../interfaces/i-user-profile';
import { ICompanyProfile } from '../../interfaces/i-company-profile';
import { IAdminProfile } from '../../interfaces/i-admin-profile';

@Injectable({
  providedIn: 'root',
})
export class BlProfileRequestService {
  constructor(private api: BlProfileApiService){}

  getProfileInfo() : Observable<IUserProfile | ICompanyProfile | IAdminProfile>
  {
    return this.api.getProfileInfo();
  }
}
