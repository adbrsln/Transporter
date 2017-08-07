import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTransporterPage } from './add-transporter';

@NgModule({
  declarations: [
    AddTransporterPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTransporterPage),
  ],
})
export class AddTransporterPageModule {}
