import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { TransporterItem } from './../../models/transporter-item/transporter-item';

/**
 * Generated class for the EditTransporterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-transporter',
  templateUrl: 'edit-transporter.html',
})
export class EditTransporterPage {
  transporterItemRef$ : FirebaseObjectObservable<TransporterItem>
  transporterItem = {} as TransporterItem;
  transporterItemSubscription:Subscription;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {
    
      const transporterItemId = this.navParams.get('transporterItemId');
    console.log(transporterItemId);

    this.transporterItemRef$ = this.database.object(`transporter-list/${transporterItemId}`)
    
    //subscribe to the object and assign the result to this.shoppingItem
    this.transporterItemSubscription =
      this.transporterItemRef$.subscribe(
        transporterItem => this.transporterItem = transporterItem)
  }

  editTransporterItem(transporterItem:TransporterItem){
      this.transporterItemRef$.update(transporterItem);
      //back to the shopping list page
      this.navCtrl.pop();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTransporterPage');
  }

  ionViewWillLeave() {
    //unsubscribe from the observable upon leaving the page
    this.transporterItemSubscription.unsubscribe();
  }
}
