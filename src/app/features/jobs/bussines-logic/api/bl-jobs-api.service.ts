import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJob, IJobDetails } from '../../interfaces/i-job';
import { IJobsSearch } from '../../interfaces/i-jobs-search';
import { IPagedResponse, IPagedSearch } from '../../../../shared/interfaces/i-paged-response';
import { buildHttpParams } from '../../../../shared/helpers/http-params-helper';
import { ICreateJob } from '../../interfaces/i-create-job';
import { ICandidate } from '../../../applications/interfaces/i-candidate';

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

  getOnJobCompany(id : number) : Observable<IJobDetails>
  {
    return this.http.get<IJobDetails>("/api/myjobposition/"+id);
  }

  getMyJobs(data : IPagedSearch) : Observable<IPagedResponse<IJob>>
  {
    const params = buildHttpParams(data);
    return this.http.get<IPagedResponse<IJob>>("/api/myjobposition", {params});
  }

  toggleSave(id : number, isSave : boolean) : Observable<any>
  {
    if (isSave)
    {
      return this.http.post(`/api/jobposition/${id}/save`,id);
    }
    return this.http.delete(`/api/jobposition/${id}/save`);
    
  }

  create(data : ICreateJob) : Observable<any>
  {
    return this.http.post("/api/jobposition", data);
  }

  close(id : number) : Observable<any>
  {
    return this.http.delete("/api/myjobposition/"+id);
  }

  getCandidates(id : number, data : IPagedSearch) : Observable<IPagedResponse<ICandidate>>
  {
    const params = buildHttpParams(data);
    return this.http.get<IPagedResponse<ICandidate>>(`/api/myjobposition/${id}/candidates`, {params});
  }

  
}
