import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  equipments = [];

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.getEquipments();
  }

  getEquipments(){
    this.equipments = [];
    this.db.collection('equipments').get().subscribe((data)=>{
      data.docs.forEach(doc => {
        this.equipments.push(
          {
            equipment:doc.data(),
            id:doc.id
          }
        );
      });
      
    })
  }
  

  deleteEquipment(id){
    if (confirm('Voulez-vous vraiment supprimer cet engin?')) {
      this.db.collection('equipments').doc(id).delete().then((data)=>{ this.getEquipments() })
    }
    
  }

}
