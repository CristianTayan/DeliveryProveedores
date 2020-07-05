import { StatusBar } from '@ionic-native/status-bar';
import { CategoriasProvider } from './../../providers/categorias/categorias';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  idempresa= localStorage.getItem('idempresa');
  categorias;
  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriasProvider: CategoriasProvider, private statusBar: StatusBar) {
  }

  ionViewDidLoad() {
    this.get_categorias();
    this.statusBar.backgroundColorByHexString('#512DA8');
    this.get_categorias();
    this.statusBar.styleLightContent();
  }

  ionViewDidEnter(){
    this.statusBar.backgroundColorByHexString('#512DA8');
    this.statusBar.styleLightContent();
  }

  get_categorias(){
    this.categoriasProvider.get_clasificacion(this.idempresa)
    .then(res => {
      this.categorias = res;
    })
  }

  crear_categorias(){
    this.navCtrl.push('CrearCategoriaPage');
  }

}
