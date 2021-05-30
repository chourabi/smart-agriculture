import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentsAddComponent } from './equipments-add/equipments-add.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { HomeComponent } from './home/home.component';
import { HumanRessourcesAddComponent } from './human-ressources-add/human-ressources-add.component';
import { HumanRessourcesDetailsComponent } from './human-ressources-details/human-ressources-details.component';
import { HumanRessourcesComponent } from './human-ressources/human-ressources.component';
import { MapComponent } from './map/map.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path:'' , redirectTo:'/home/projects', pathMatch:'full' },

  { path:'home' , component:HomeComponent, children:[
    { path:'projects', component:ProjectsComponent },
    { path:'projects-add', component:ProjectAddComponent },
    { path:'project-details/:id', component:ProjectDetailsComponent },

    // rh
    { path:'rh', component:HumanRessourcesComponent },
    { path:'rh-add', component:HumanRessourcesAddComponent },
    { path:'rh-edit/:id', component:HumanRessourcesDetailsComponent },
    


    // equipments
    { path:'equipments', component:EquipmentsComponent },
    { path:'equipments-add-e', component:EquipmentsAddComponent }

    
  ] },
  
  { path:'signin' , component:SigninComponent },
  { path:'signup' , component:SignupComponent },


  { path:'**' , redirectTo:'/' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
