import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HumanRessourcesComponent } from './human-ressources/human-ressources.component';
import { HumanRessourcesAddComponent } from './human-ressources-add/human-ressources-add.component';
import { HumanRessourcesDetailsComponent } from './human-ressources-details/human-ressources-details.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { EquipmentsAddComponent } from './equipments-add/equipments-add.component';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
  StorageBucket
} from "@angular/fire/storage";
import { FinancialsComponent } from './financials/financials.component';
import { FinancialsAddComponent } from './financials-add/financials-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    ProjectsComponent,
    ProjectAddComponent,
    ProjectDetailsComponent,
    HumanRessourcesComponent,
    HumanRessourcesAddComponent,
    HumanRessourcesDetailsComponent,
    EquipmentsComponent,
    EquipmentsAddComponent,
    FinancialsComponent,
    FinancialsAddComponent
  ],
  imports: [
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFirestoreModule,
    AngularFireStorageModule,
    
    
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAUU3KbFsiztdKMzzNWDE3OWsHQFdptG1g",
      authDomain: "smart-agriculture-4eecd.firebaseapp.com",
      projectId: "smart-agriculture-4eecd",
      storageBucket: "smart-agriculture-4eecd.appspot.com",
      messagingSenderId: "958528188064",
      appId: "1:958528188064:web:3f4f915d29e59a319263c5",
      measurementId: "G-7YE4SNG7WR"

    }),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
