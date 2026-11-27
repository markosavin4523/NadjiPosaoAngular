import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserActivitySearch } from '../../interfaces/i-user-activity-search';
import { Observable } from 'rxjs';
import { IUserActivity } from '../../interfaces/i-user-activity';
import { IPagedResponse } from '../../../../../shared/interfaces/i-paged-response';
import { buildHttpParams } from '../../../../../shared/helpers/http-params-helper';
import { IUser } from '../../interfaces/i-user';

@Injectable({
  providedIn: 'root',
})
export class BlUsersApiService {

  constructor(private http : HttpClient) {}

  getUsersActivity(data : IUserActivitySearch) : Observable<IPagedResponse<IUserActivity>>
  {
    const params = buildHttpParams(data);
    return this.http.get<IPagedResponse<IUserActivity>>("/api/useractivity", {params});
  }

  getAllUsers(data : IUserActivitySearch) : Observable<IPagedResponse<IUser>>
  {
    const params = buildHttpParams(data);
    return this.http.get<IPagedResponse<IUser>>("/api/user", {params});
  }

  banUser(id : number) : Observable<any>
  {
    return this.http.patch("/api/user/"+id, {})

  }
}
