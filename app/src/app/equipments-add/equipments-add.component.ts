import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipments-add',
  templateUrl: './equipments-add.component.html',
  styleUrls: ['./equipments-add.component.css']
})
export class EquipmentsAddComponent implements OnInit {

  newEquipment = new FormGroup({
    title:new FormControl('',Validators.required),
    price:new FormControl(''),
    pricePerHour:new FormControl(''),
    dateAdd:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
    
  })
  constructor( private db:AngularFirestore, private router:Router ) { }

  ngOnInit(): void {
  }


  create(){
    this.db.collection('equipments').add(this.newEquipment.value).then(()=>{
      this.router.navigate(['/home/equipments'])
    })
    
  }

}
