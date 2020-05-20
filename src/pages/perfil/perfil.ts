import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  empresa;
  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar, private usuariosProvider: UsuariosProvider) {
  }

  ionViewDidLoad() {
    this.get_empresa_info();
    this.statusBar.backgroundColorByHexString('#F1EEE9');
    this.statusBar.styleDefault();
  }

  get_empresa_info() {
    this.usuariosProvider.get_info_empresa(localStorage.getItem('idempresa'))
      .then(res => {
        this.empresa = res;
      })
  }

}
