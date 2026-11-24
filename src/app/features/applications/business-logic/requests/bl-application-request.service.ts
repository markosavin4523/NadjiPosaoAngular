import { Injectable } from '@angular/core';
import { BlApplicationApiService } from '../api/bl-application-api.service';
import { IApplicationFormData } from '../../interfaces/i-application-form-data';
import { Observable } from 'rxjs';
import { IApplication } from '../../interfaces/i-application';
import { IPagedResponse, IPagedSearch } from '../../../../shared/interfaces/i-paged-response';

@Injectable({
  providedIn: 'root',
})
export class BlApplicationRequestService {
  constructor(private service: BlApplicationApiService) { }

  apply(id: number, data: IApplicationFormData): Observable<any> {
    return this.service.apply(id, data);
  }
  getMyApplication(data: IPagedSearch): Observable<IPagedResponse<IApplication>> {
    return this.service.getMyApplication(data); 
  }
}
