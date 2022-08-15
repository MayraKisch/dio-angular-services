import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  apiURL = "https://rickandmortyapi.com/api/character"

  constructor(private httpClient: HttpClient) { }

  getList():Observable<any> {
    return this.httpClient.get<any>(this.apiURL)
  }
}
