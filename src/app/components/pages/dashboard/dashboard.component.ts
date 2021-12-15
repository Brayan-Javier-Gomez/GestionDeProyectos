import { Component} from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  public dataProjects:any = []
  num_projects = "";
  dataUsers:any = [];


  constructor(private projects:ProjectsService, private users:UsersService) { 

    this.dataProjects = [];

  }

  getAllProjects(){
    this.projects.getAllProjects().subscribe((data:any)=>{
      console.log(data["proyectos"])
      this.dataProjects = data["proyectos"];
    })
  }

  getAllUsers(){
    this.users.getUsers().subscribe((data:any)=>{
      console.log(data)
      this.dataUsers = data["usuarios"]
    })
  }



}
