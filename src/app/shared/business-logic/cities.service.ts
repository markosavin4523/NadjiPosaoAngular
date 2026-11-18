import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICity } from '../interfaces/i-city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient){}

  getAll() : Observable<ICity[]>
  {
    return this.http.get<ICity[]>("/api/city");
  }
}
