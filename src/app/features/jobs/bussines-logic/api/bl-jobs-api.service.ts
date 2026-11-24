import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJob, IJobDetails } from '../../interfaces/i-job';
import { IJobsSearch } from '../../interfaces/i-jobs-search';
import { IPagedResponse, IPagedSearch } from '../../../../shared/interfaces/i-paged-response';
import { buildHttpParams } from '../../../../shared/helpers/http-params-helper';

@Injectable({
  providedIn: 'root',
})
export class BlJobsApiService {

  constructor(private http: HttpClient) {

  }

  getAllJobs(data: IJobsSearch | null = null): Observable<IPagedResponse<IJob>> {
    const params = buildHttpParams(data);
    return this.http.get<IPagedResponse<IJob>>("/api/jobposition", { params });
  }

  getSavedJobs(data: IPagedSearch) : Observable<IPagedResponse<IJob>>
  {
    const params = buildHttpParams(data);
    return this.http.get<IPagedResponse<IJob>>("/api/jobposition/saved", {params});
  }

  getOneJob(id : number) : Observable<IJobDetails>
  {
    return this.http.get<IJobDetails>("/api/jobposition/"+id);
  }

  toggleSave(id : number, isSave : boolean) : Observable<any>
  {
    if (isSave)
    {
      return this.http.post(`/api/jobposition/${id}/save`,id);
    }
    return this.http.delete(`/api/jobposition/${id}/save`);
    
  }

  
}
