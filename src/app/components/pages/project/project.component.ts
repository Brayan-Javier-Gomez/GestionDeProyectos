import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{

  dataProject:any = [];
  membersProject:any = {};
  dataObjetives: any = []


  constructor(private router: ActivatedRoute, private projectService : ProjectsService) { 

  }


ngOnInit(): void {
  const idProject = this.router.snapshot.paramMap.get('id');

  this.projectService.getInfoProject(idProject).subscribe((data:any)=>{
    console.log(data)
    this.dataProject.push(data["project"])  
    console.log(this.dataProject)
  })
  this.projectService.getMembersTeam(idProject).subscribe((data:any)=>{
    console.log(data)
    this.membersProject = data
  })
  this.projectService.getObjetives(idProject).subscribe((data:any) =>{
    console.log(data);
    this.dataObjetives = data["tasks"]
    console.log(this.dataObjetives)
  })

}


  
  


}
