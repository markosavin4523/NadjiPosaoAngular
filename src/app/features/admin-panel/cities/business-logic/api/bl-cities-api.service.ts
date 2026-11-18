import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from '../../../../../shared/interfaces/i-city';

@Injectable({
  providedIn: 'root',
})
export class BlCitiesApiService {
  constructor(private http: HttpClient){}

  getAll() : Observable<ICity[]>
  {
    return this.http.get<ICity[]>("/api/city");
  }
}
