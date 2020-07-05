import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  nombre_empresa = localStorage.getItem('nombre_empresa');
  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    this.statusBar.backgroundColorByHexString('#512DA8');
    this.statusBar.styleLightContent();
  }

  ionViewDidEnter(){
    this.statusBar.backgroundColorByHexString('#512DA8');
    this.statusBar.styleLightContent();
  }

  productos(){
    this.navCtrl.setRoot('ProductosPage');
  }

  notificaciones(){
    this.navCtrl.setRoot('PedidoPage');
  }

}
