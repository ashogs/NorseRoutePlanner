import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesearchService {

  private url = "http://localhost:8080/a2b?routepoints=Mjømna,Rutledal";


  constructor(private http: HttpClient) { }

  getRoute(from,to): Observable<any> {
    console.log(from,to)
    let from2: string = "Mjømna"
    let to2: string = "Nåra"
    let request: string = "http://localhost:8080/a2b?routepoints="+from+","+to;
    console.log(request)
    const options = {responseType: 'text' as 'text'};
    return this.http.get<any>(request,  options);
  }
}
