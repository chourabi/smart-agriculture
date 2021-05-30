import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [];

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.projects = [];
    this.db.collection('projects').get().subscribe((data)=>{
      data.docs.forEach(doc => {
        this.projects.push(
          {
            project:doc.data(),
            id:doc.id
          }
        );
      });
      
    })
  }




}
