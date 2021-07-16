import { Component, OnInit } from '@angular/core';
import { Project } from '../project'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects:Project[] = [
    new Project('4life', 'webapp for the gbv Victim to express themselves', 'Backend', '03/12/2020'),
    new Project('Delani Studions', 'webapp clone from the actuall delani', 'Ux/UI dev', '5/07/2021'),
    new Project('Snake Game', 'just a game to distruct you', 'fullstack dev', '7/08/2020'),
  ]

  showdetails(index:number){
    this.projects[index].showfulldetails = !this.projects[index].showfulldetails
  }

  deleSpecProject(noti:boolean, index:number){
    if(noti){
      this.projects.splice(index, 1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
