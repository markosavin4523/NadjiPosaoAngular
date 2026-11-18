import { Injectable } from '@angular/core';
import { BlJobsApiService } from '../api/bl-jobs-api.service';
import { IJobsSearch } from '../../interfaces/i-jobs-search';
import { IPagedResponse } from '../../../../shared/interfaces/i-paged-response';
import { IJob } from '../../interfaces/i-job';
import { forkJoin, Observable } from 'rxjs';
import { BlCategoriesRequestService } from '../../../admin-panel/categories/business-logic/requests/bl-categories-request.service';
import { BlCategoriesApiService } from '../../../admin-panel/categories/business-logic/api/bl-categories-api.service';
import { CitiesService } from '../../../../shared/business-logic/cities.service';

@Injectable({
  providedIn: 'root',
})
export class BlJobsRequesnService {

  constructor (
    private apiService : BlJobsApiService,
    private categoriesService : BlCategoriesApiService,
    private citiesServie: CitiesService
  ){}

   getAllJobs(data: IJobsSearch | null = null): Observable<IPagedResponse<IJob>>
   {
      return this.apiService.getAllJobs(data);
   }

   getAallFilterFormDropdownData() : Observable<any>
   {
     const requests: any = [
      this.categoriesService.getCategories(),
      this.citiesServie.getAll(),
    ];
    return forkJoin(requests);
   }
}
