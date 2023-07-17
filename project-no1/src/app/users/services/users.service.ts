import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  // create
  addUser(formData: any): Observable<any> {
    console.log(formData);
    // What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // What's the HTTP Method? POST
    // What's the REST API Client? HttpClient
    return this.http.post<any>(environment.usersApiUrl, formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  // read  == fetching many users
  getUsers(): Observable<any[]> {
    // What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // What's the HTTP Method? GET
    // What's the REST API Client? HttpClient
    return this.http.get<any[]>(environment.usersApiUrl)
      .pipe(map((res: any[]) => {
        // enrich the data, filter, sort, remove, add, convert
        console.log(res);
        return res;
      }));
  }

  // read == fetch user by id 
  getUserById(id: string | null): Observable<any>{
    console.log(id);
    return this.http.get<any>(environment.usersApiUrl + '/' + id)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  // update
  updateUser(formData: any){
    console.log(formData);
    return this.http.put(environment.usersApiUrl + '/' + formData.id, formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
