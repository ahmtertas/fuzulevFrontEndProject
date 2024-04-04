import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstate } from '../models/realEstate';

@Injectable({
  providedIn: 'root',
})
export class RealEstateService {
  apiUrl = 'http://localhost:5279/RealEstate/GetAllList';

  constructor(private httpClient: HttpClient) {}

  getRealEstate(): Observable<RealEstate[]> {
    return this.httpClient.get<RealEstate[]>(this.apiUrl);
  }

  getRealEstateWithFilter(titleName: string): Observable<RealEstate[]> {
    return this.httpClient.get<RealEstate[]>(this.apiUrl + `?filter=contains(title, '${titleName}')`);
  }

  getRealEstateWithOrder(ordertype:string):Observable<RealEstate[]>{
    let newpath = this.apiUrl + "?orderby=price%20" + ordertype;
    return this.httpClient.get<RealEstate[]>(newpath);
  }


  getRealEstateFromWho(from:string):Observable<RealEstate[]>{
    let newpath = this.apiUrl + `?filter=contains(FromWho, '${from}')`;
    return this.httpClient.get<RealEstate[]>(newpath);
  }

  getRealEstateTop(top:number):Observable<RealEstate[]>{
    let newpath = this.apiUrl + `?top=${top}&skip=0&orderby=price%20desc`;
    return this.httpClient.get<RealEstate[]>(newpath);
  }
}
