import { Injectable } from '@angular/core';
import { BlUsersApiService } from '../api/bl-users-api-service';
import { IUserActivitySearch } from '../../interfaces/i-user-activity-search';
import { IUserActivity } from '../../interfaces/i-user-activity';
import { IPagedResponse } from '../../../../../shared/interfaces/i-paged-response';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/i-user';

@Injectable({
  providedIn: 'root',
})
export class BlUsersRequestSrervice {

  constructor(private service: BlUsersApiService) {}

  getUsersActivity(data : IUserActivitySearch) : Observable<IPagedResponse<IUserActivity>>
  {
    return this.service.getUsersActivity(data);
  }
  getAllUsers (data : IUserActivitySearch) : Observable<IPagedResponse<IUser>>
  {
    return this.service.getAllUsers(data);
  }
  banUser(id : number) : Observable<any>
  {
    return this.service.banUser(id);
  }
}
