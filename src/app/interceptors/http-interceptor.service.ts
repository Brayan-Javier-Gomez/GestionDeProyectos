import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {


  token : any;
  constructor() { 
    this.token = window.localStorage.getItem("token")
  }

  


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("paso por peaje")
    const headers = new HttpHeaders({
      "token":this.token
    })
   
    const request_clone = req.clone({
      headers
    })

    return next.handle(request_clone);

  }
}
