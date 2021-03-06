import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the ListaPedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-pedidos',
  templateUrl: 'lista-pedidos.html',
})
export class ListaPedidosPage {
  pedidos;
  habilitar;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pedidosProvider: PedidosProvider, private statusBar: StatusBar) {
  }

  ionViewDidLoad() {
    // this.get_pedidos();
    this.statusBar.backgroundColorByHexString('#512DA8');
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleLightContent();
  }

  ionViewDidEnter(){
    this.statusBar.backgroundColorByHexString('#512DA8');
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleLightContent();
    this.get_pedidos();
  }

  get_pedidos(){
    this.pedidosProvider.get_pedidos_empresa(localStorage.getItem('idempresa'))
    .then( res => {
      this.pedidos = res;
      console.log(this.pedidos);
    })
  }

  ver_detalles(idpedido, nropedido, idusuario, subtotal, costo_envio, estado, coordenadax, coordenaday, iddireccion){
    this.navCtrl.push('PedidoPage',{
      idpedido:idpedido,
      nropedido: nropedido,
      idusuario: idusuario,
      subtotal: subtotal,
      costo_envio: costo_envio,
      estado: estado,
      coordenadax: coordenadax,
      coordenaday: coordenaday,
      iddireccion:iddireccion,
    });
  }

  aceptar_pedido(idpedido){
    this.pedidosProvider.atender_dedidos(idpedido)
    .then(res => {
      console.log(res);
      localStorage.setItem('idpedido', idpedido); 
    },(err) => {
      // this.navCtrl.setRoot(HomePage);
    })
  }

}
