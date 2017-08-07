import { ListTransporterPage } from './../pages/list-transporter/list-transporter';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AddTransporterPage } from './../pages/add-transporter/add-transporter';
import { EditTransporterPage } from './../pages/edit-transporter/edit-transporter';
import { ViewTransporterPage } from './../pages/view-transporter/view-transporter';

@NgModule({
  declarations: [
    MyApp,
    ViewTransporterPage,
    HomePage,
    AddTransporterPage,
    EditTransporterPage,
    ViewTransporterPage,
    ListTransporterPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ViewTransporterPage,
    HomePage,
    AddTransporterPage,
    EditTransporterPage,
    ViewTransporterPage,
    ListTransporterPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
