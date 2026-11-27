import { Injectable } from '@angular/core';
import { BlCategoriesApiService } from '../api/bl-categories-api.service';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../../shared/interfaces/i-category';
import { ICreateCategory } from '../../interfaces/i-create-category';

@Injectable({
  providedIn: 'root',
})
export class BlCategoriesRequestService {
  constructor(private apiService : BlCategoriesApiService) {}

  getCategories() : Observable<ICategory[]>
  {
    return this.apiService.getCategories();
  }

  getSubcategories(id : number) : Observable<ICategory[]>
  {
    return this.apiService.getSubcategories(id);
  }
  createCategory(data : ICreateCategory) : Observable<any>
  {
    return this.apiService.createCategory(data);
  } 
}
