import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project = null;
  employees = [];

  affectEmployeeForm = new FormGroup({
    employee_id:new FormControl('',Validators.required)
  })


  constructor(private route:ActivatedRoute,private db:AngularFirestore) { }

  ngOnInit(): void {
    this.getProjectDeatils();
    this.getEmployees();
  }

  getEmployees(){
    this.employees = [];
    this.db.collection('employees').get().subscribe((data)=>{
      data.docs.forEach(doc => {
        this.employees.push(
          {
            employee:doc.data(),
            id:doc.id
          }
        );
      });
      
    })
  }
  getProjectDeatils(){
    const id = this.route.snapshot.params.id;
    this.db.collection('projects').doc(id).get().subscribe((data)=>{
      this.project = data.data();
    })
    
  }


  addNewEmployee(){
    const id = this.route.snapshot.params.id;
    const idEmployee = this.affectEmployeeForm.value.employee_id;


    var employeesIDs = this.project.employeesIDs != null ? this.project.employeesIDs :[];
    if (employeesIDs.indexOf(idEmployee) == -1) {
      employeesIDs.push(idEmployee);
    }

    this.db.collection('projects').doc(id).update({"employeesIDs":employeesIDs}).then((res)=>this.getProjectDeatils())
    

    var employeeToAdd;

    for (let i = 0; i < this.employees.length; i++) {
      const employee = this.employees[i];

      if (employee.id == idEmployee) {
        employeeToAdd = employee;
      }
      
    }

    if (this.project.employees != null) {
      var oldList = this.project.employees;
      
      var alredayExist = false;
      for (let i = 0; i < oldList.length; i++) {
        const odlEmployee = oldList[i];
        if (odlEmployee.id == employeeToAdd.id) {
          alredayExist = true;
        }
      }

      if (alredayExist == false) {
        oldList.push(employeeToAdd);

        this.db.collection('projects').doc(id).update({"employees":oldList}).then((res)=>this.getProjectDeatils())
      }
    }else{
      var newList = [employeeToAdd];
      this.db.collection('projects').doc(id).update({"employees":newList}).then((res)=>this.getProjectDeatils())
    }
  }


  deleteEmployee(id){
    const idProject = this.route.snapshot.params.id;
    if (confirm('Voulez-vous vraiment supprimer cet employé de ce projet?')) {
      var oldList = this.project.employees;
      
      for (let i = 0; i < oldList.length; i++) {
        const odlEmployee = oldList[i];
        if (odlEmployee.id == id) {
          oldList.splice(i,1);

          console.log(oldList);
          

          this.db.collection('projects').doc(idProject).update({"employees":oldList}).then((res)=>this.getProjectDeatils())


        }
      }
    }
  }
}
