import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
    
  }
  public getCustomersList(url?: string){
    return this.httpClient.get(`${this.apiURL}/users`);
  }

}