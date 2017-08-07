import { EditTransporterPage } from './../edit-transporter/edit-transporter';
import { AddTransporterPage } from './../add-transporter/add-transporter';
import { TransporterItem } from './../../models/transporter-item/transporter-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ListTransporterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-transporter',
  templateUrl: 'list-transporter.html',
})
export class ListTransporterPage {
  transporterListRef$:FirebaseListObservable<TransporterItem[]>

  constructor(public navCtrl: NavController,
  private database: AngularFireDatabase,
  private actionSheetCtrl : ActionSheetController 
  ) {
    //pointing transporterListRef at firebase -> 'transporter-list' node
    this.transporterListRef$ = this.database.list('transporter-list');
    
  }
  selectTransporterItem(transporterItem : TransporterItem){
    /*display an actionsheeet that gives the user the following options:
      1.edit the transporterItem
      2.Delete the transporterItem
      3.Cancel the Selection
    */
    this.actionSheetCtrl.create({
      title: `${transporterItem.transporterName}`,
      buttons: [
       
      {
        text: 'Edit',
        icon: 'create' ,
        handler: () =>{
          //send the user to the edit shoppingitempage and pass the key as parameter
          this.navCtrl.push(EditTransporterPage,{ transporterItemId: transporterItem.$key});
          /*
            navigation stack:
            ['transporterlistPage',
              'transporterItemIdPage',
              { shoppingItemId: 'KqoyMlXKhGQ4h7H3tLd'}

            ]
          */
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash' ,
        handler:() =>{
          //delete the current shoppingitem
          this.transporterListRef$.remove(transporterItem.$key);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close' ,
        handler:() =>{
          //cancel
          console.log("The User has selected the cancel button")
        }
      }
    ]
    }).present();
  }

 navigateToAddTransporterPage(){
    //navigate user to the AddShoppingPage
    this.navCtrl.push(AddTransporterPage);
    //change push to setroot will give no back page to the page
    
  }
  

}

