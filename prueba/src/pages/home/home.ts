import { ModalVistaDescuentosPage } from './../modal-vista-descuentos/modal-vista-descuentos';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { TiendaPage } from '../tienda/tienda';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tiendas:any;
  //items: Observable<any[]>;

  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase, public modalCtrl: ModalController) {  //aunmento afDB: AngularFireDatabase
    this.afDB.list('tiendas').valueChanges()  //aumento this.items = afDB.list('cuisines').valueChanges();
    .subscribe((resp)=>{
      this.tiendas = resp;
      console.log(this.tiendas);
    });

  }

  ingresaN(){
    this.navCtrl.push(TiendaPage);
  }

  borrar(tienda){
    this.afDB.object('tiendas/'+tienda.numLocal).remove();
  }

  verDescuentos(tienda){
    console.log("descuentos"); 
    let modal = this.modalCtrl.create(ModalVistaDescuentosPage, { tienda: tienda });
    modal.present();
  }

}
