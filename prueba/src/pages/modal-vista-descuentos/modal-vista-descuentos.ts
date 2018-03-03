import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalVistaDescuentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-vista-descuentos',
  templateUrl: 'modal-vista-descuentos.html',
})
export class ModalVistaDescuentosPage {

  tienda:any ;

  descuentos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public afDB: AngularFireDatabase) {
    this.tienda =  this.navParams.get('tienda');
    this.afDB.list('tiendas/'+this.tienda.numLocal+'/descuento').valueChanges()
    .subscribe((resp)=>{
      this.descuentos = resp;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalVistaDescuentosPage');
  }

  closeModal() {
      this.viewCtrl.dismiss();
  }

}
