import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-human-ressources-add',
  templateUrl: './human-ressources-add.component.html',
  styleUrls: ['./human-ressources-add.component.css']
})
export class HumanRessourcesAddComponent implements OnInit {

  newEmployee = new FormGroup({
    fullname: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl(''),
    skill: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required),
    freq: new FormControl('',Validators.required),
    
    dateJoin: new FormControl('',Validators.required),
    
  })
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
 

  constructor(private db:AngularFirestore, private router:Router, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }


  create(){
    this.db.collection('employees').add(this.newEmployee.value).then((data)=>{
      this.router.navigate(['/home/rh']);
    })
  }

  onFileSelected(event) {
   /* var n = Date.now();
    const file = event.target.files[0];
    const filePath = `employees/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`employees/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }


            
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });*/
  }

}
