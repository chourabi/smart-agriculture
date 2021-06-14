import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  /*
                  <div class="form-group">
                    <label for="">Distance interligne</label>
                    <input type="text" class="form-control" formControlName="interDistance">
                </div>
                <div class="form-group">
                    <label for="">Distance intraligne</label>
                    <input type="text" class="form-control" formControlName="intraDistance">
                </div>
   */

  newProjectForm = new FormGroup({
    title: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    startDate: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
    target: new FormControl('',Validators.required),
    superficie: new FormControl('',Validators.required),
    intraDistance: new FormControl('',Validators.required),
    
    
    
  })
  constructor( private db:AngularFirestore, private router:Router ) { }

  ngOnInit(): void {

  }

  createProject(){
    this.db.collection('projects').add(this.newProjectForm.value).then(()=>{
      this.router.navigate(['/home/projects'])
    })
    
  }

}
