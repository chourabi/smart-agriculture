import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-financials-add',
  templateUrl: './financials-add.component.html',
  styleUrls: ['./financials-add.component.css']
})
export class FinancialsAddComponent implements OnInit {

  newtransaction = new FormGroup({
    title: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    amount: new FormControl('',Validators.required),
    project_name: new FormControl('',Validators.required),
    operation_name: new FormControl('',Validators.required),
    
  })
  projects = [];

  constructor(private db:AngularFirestore, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.projects = [];
    this.db.collection('projects').get().subscribe((data)=>{
      data.docs.forEach(doc => {
        this.projects.push( doc.data());
      });
      
    })
  }


  create(){
    this.db.collection('transactions').add(this.newtransaction.value).then(()=>{
      this.router.navigate(['/home/financials'])
    })
  }
}
