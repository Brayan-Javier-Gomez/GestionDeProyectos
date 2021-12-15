import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})


export class ProjectsService {

  url = "http://localhost:8080";

  

  constructor(private http : HttpClient) {

    

   }

   getAllProjects(){
    return this.http.get(`${this.url}/proyectos`);
   }

   getInfoProject(id:any){
    return this.http.get(`${this.url}/proyectos/${id}`)
   }
   getMembersTeam(id:any){
     return this.http.get(`${this.url}/proyectos/members/${id}`)
   }
   getObjetives(id:any){
     return this.http.get(`${this.url}/objetivo/${id}`)
   }


}
