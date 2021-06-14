import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {

  transactions = []; 

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.gett();

  }


  async gett(){
    this.transactions = [];
    this.db.collection('transactions').get().subscribe((data)=>{
      data.docs.forEach(async (doc) => {
         this.transactions.push(doc.data())
      })
    })
  }
}
