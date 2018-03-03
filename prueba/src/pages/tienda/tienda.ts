import { AngularFireDatabase } from 'angularfire2/database';
import { ModalDescuentosPage } from './../modal-descuentos/modal-descuentos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the TiendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tienda',
  templateUrl: 'tienda.html',
})
export class TiendaPage {

  tienda: any = {
    activiCom: "",
    nomLocal: "",
    nomprop: "",
    numLocal: ""
  }

  creado: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public afDB: AngularFireDatabase, public modalCtrl: ModalController) {
    this.creado = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiendaPage');
  }

  crearLocal(tienda){
    console.log(tienda);
    this.afDB.object('tiendas/'+tienda.numLocal).set(tienda);
    this.creado = false;
  }

  ponerDescuentos(){
    console.log("descuentos"); 
    let modal = this.modalCtrl.create(ModalDescuentosPage, { tienda: this.tienda });
    modal.present();
  }
  
  salir(){
    this.navCtrl.popToRoot();
  }

}
