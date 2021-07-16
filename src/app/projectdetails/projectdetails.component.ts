import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../project';


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  @Input() project!:Project;
  @Output() todeleproject = new EventEmitter<boolean>()

  deleteproject(todele:boolean){
    this.todeleproject.emit(todele)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
