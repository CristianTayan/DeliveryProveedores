import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
idcategoria = this.navParams.get('idategoria');
productos;
  constructor(public navCtrl: NavController, public navParams: NavParams, private productosProvider: ProductosProvider, private statusBar:StatusBar) {
  }

  ionViewDidLoad() {
    this.get_productos();
    this.statusBar.backgroundColorByHexString('#F1EEE9');
    this.statusBar.styleDefault();
  }
  ionViewDidEnter(){
    this.get_productos();
    this.statusBar.backgroundColorByHexString('#F1EEE9');
    this.statusBar.styleDefault();
  }

  get_productos(){
    var idempresa= localStorage.getItem('idempresa')
    this.productosProvider.get_productos(idempresa)
    .then(res =>{
      this.productos = res;
    })
  }
  crear_producto(){
    this.navCtrl.push('CrearProductoPage');
  }

}
