import { ViewTransporterPage } from './../view-transporter/view-transporter';
import { ListTransporterPage } from './../list-transporter/list-transporter';
import { EditTransporterPage } from './../edit-transporter/edit-transporter';
import { AddTransporterPage } from './../add-transporter/add-transporter';
import { TransporterItem } from './../../models/transporter-item/transporter-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  transporterListRef$:FirebaseListObservable<TransporterItem[]>

  constructor(public navCtrl: NavController,
  private database: AngularFireDatabase,
  private actionSheetCtrl : ActionSheetController 
  ) {
    //pointing transporterListRef at firebase -> 'transporter-list' node
    this.transporterListRef$ = this.database.list('transporter-list');
    
  }
  selectTransporterItem(transporterItem : TransporterItem){
    this.navCtrl.push(ViewTransporterPage,{ transporterItemId: transporterItem.$key});
  }
  navigateToAddTransporterPage(){
    //navigate user to the AddShoppingPage
    this.navCtrl.push(AddTransporterPage);
    //change push to setroot will give no back page to the page
    
  }
  navigateToListTransporterPage(){
    //navigate user to the AddShoppingPage
    this.navCtrl.push(ListTransporterPage);
    //change push to setroot will give no back page to the page
    
  }
}
