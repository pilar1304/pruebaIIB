import { ModalVistaDescuentosPage } from './../pages/modal-vista-descuentos/modal-vista-descuentos';
import { ModalDescuentosPage } from './../pages/modal-descuentos/modal-descuentos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TiendaPage } from '../pages/tienda/tienda';

export const firebaseConfig = {
  apiKey: "AIzaSyCDOLr7C6MJFYhLJg7J1hJVm1UvrcsX8nI",
  authDomain: "prueba-dcdb2.firebaseapp.com",
  databaseURL: "https://prueba-dcdb2.firebaseio.com",
  storageBucket: "prueba-dcdb2.appspot.com",
  messagingSenderId: '668357846507'
};

//"auth != null"

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TiendaPage,
    ModalDescuentosPage,
    ModalVistaDescuentosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TiendaPage,
    ModalDescuentosPage,
    ModalVistaDescuentosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
