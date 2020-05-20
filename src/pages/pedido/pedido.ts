import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar) {
  }

  ionViewDidLoad() {
    this.statusBar.backgroundColorByHexString('#F1EEE9');
    this.statusBar.styleDefault();
  }

  ionViewWillEnter(){
    this.statusBar.backgroundColorByHexString('#F1EEE9');
    this.statusBar.styleDefault();
  }

}
