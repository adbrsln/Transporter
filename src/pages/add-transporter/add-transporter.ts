import { TransporterItem } from './../../models/transporter-item/transporter-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-add-transporter',
  templateUrl: 'add-transporter.html',
})
export class AddTransporterPage {
  transporterItem = {} as TransporterItem
  transporterItemRef$: FirebaseListObservable<TransporterItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) {
  this.transporterItemRef$ = this.database.list('transporter-list');
    
  }
  addTransporterItem(transporterItem: TransporterItem){
    /* 
      create a new anonymous object and convert itemNumber to Number
      push this to our firebase database under 'shopping-list' node
    */
    this.transporterItemRef$.push({
      transporterName: this.transporterItem.transporterName,
      transporterPhone: this.transporterItem.transporterPhone
    });
    
    //reset our shopping item array
    this.transporterItem = {} as TransporterItem;
    
    //navigate the user back to the shoppinglistPage
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTransporterPage');
  }

}
