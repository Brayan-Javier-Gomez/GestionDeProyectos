import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:8080"

  constructor( private http:HttpClient ) { }



  login(body:any){
    
    return this.http.post(`${this.url}/login`,body);

  }
}
