import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  projects = [];

  constructor(private db:AngularFirestore, private auth:AuthService) { }

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

  logout(){
    if (confirm("Voulez-vous vraiment vous déconnecter?")) {
      this.auth.logOut();
    }
  }

}
