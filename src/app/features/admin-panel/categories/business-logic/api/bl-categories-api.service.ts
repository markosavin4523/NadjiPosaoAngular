import { Injectable } from '@angular/core';
import { ICategory } from '../../../../../shared/interfaces/i-category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICreateCategory } from '../../interfaces/i-create-category';

@Injectable({
  providedIn: 'root',
})
export class BlCategoriesApiService {

  constructor(private httpClient : HttpClient) {}

  getCategories() : Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>("/api/category");
  }

  getSubcategories(id : number) : Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>("/api/category/"+id);
  }

  createCategory(data : ICreateCategory) : Observable<any>
  {
    return this.httpClient.post("/api/category", data);
  }
}
