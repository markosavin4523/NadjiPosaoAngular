import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJob } from '../../interfaces/i-job';
import { IJobsSearch } from '../../interfaces/i-jobs-search';
import { IPagedResponse } from '../../../../shared/interfaces/i-paged-response';

@Injectable({
  providedIn: 'root',
})
export class BlJobsApiService {

  constructor(private http: HttpClient) {

  }

  getAllJobs(data: IJobsSearch | null = null): Observable<IPagedResponse<IJob>> {
    let params = new HttpParams();

    if (data) {
      Object.keys(data).forEach(key => {
        const value = (data as any)[key];
        if (value !== null && value !== undefined && value !== '') {
          params = params.set(key, value);
        }
      });
    }

    return this.http.get<IPagedResponse<IJob>>("/api/jobposition", { params });
  }

  
}
