import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalDescuentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-descuentos',
  templateUrl: 'modal-descuentos.html',
})
export class ModalDescuentosPage {

  tienda:any;

  descuento:any = {
    nomProd: "",
    porDescu: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public afDB: AngularFireDatabase) {
    this.tienda = this.navParams.get('tienda');
  }

  crearDesc(descuento){
    console.log(descuento);
    let now = new Date(); 
    let id = now.getTime().toString();
    this.afDB.object('tiendas/'+this.tienda.numLocal+'/descuento/'+id).set(descuento)
    .then(()=>this.viewCtrl.dismiss());
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDescuentosPage');
  }

  closeModal() {
      this.viewCtrl.dismiss();
  }

}
