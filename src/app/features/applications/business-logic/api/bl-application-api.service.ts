import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApplicationFormData } from '../../interfaces/i-application-form-data';
import { Observable } from 'rxjs';
import { IPagedResponse, IPagedSearch } from '../../../../shared/interfaces/i-paged-response';
import { IApplication } from '../../interfaces/i-application';
import { buildHttpParams } from '../../../../shared/helpers/http-params-helper';
import { ICandidate } from '../../interfaces/i-candidate';

@Injectable({
  providedIn: 'root',
})
export class BlApplicationApiService {

  constructor(private http: HttpClient) { }

  apply(jobPositionId: number, data: IApplicationFormData): Observable<any> {
    
    const formData = new FormData();

    if (data.cvPath) {
      formData.append('CvPath', data.cvPath, data.cvPath.name);
    }
    formData.append('Message', data.message ?? '');
    return this.http.post(`/api/jobapplication/${jobPositionId}`, formData);
  }

  getMyApplication(data : IPagedSearch) : Observable<IPagedResponse<IApplication>>
  {
    const params = buildHttpParams(data);
    return this.http.get<IPagedResponse<IApplication>>("/api/jobapplication" , {params});
  }

  chooseCandidate(pid : number, aid : number) : Observable<any>
  {
    return this.http.post(`/api/myjobposition/${pid}/candidates/${aid}`, {});
  }

  
}
