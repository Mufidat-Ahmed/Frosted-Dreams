import { Injectable } from '@angular/core';
import { Data } from '../../data';
import { Info } from '../shared/models/Info';
import { HttpClient } from '@angular/common/http';
import { BAKE_BY_ID_URL, DATA_URL, SEARCH_URL } from '../shared/models/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BakeService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Info[]>{
    return this.http.get<Info[]>(DATA_URL);
  }

 

  getAllBakesBySearchTerm(searchTerm: string): Observable<Info[]> {
    console.log(`Fetching results for: ${searchTerm}`);
    return this.http.get<Info[]>(SEARCH_URL(searchTerm)); 
  }
  getBakeById(bakeId:string):Observable<Info>{
    return this.http.get<Info>(BAKE_BY_ID_URL + bakeId);
  }
}
