import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the PedidosAtendidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos-atendidos',
  templateUrl: 'pedidos-atendidos.html',
})
export class PedidosAtendidosPage {
  pedidos;
  pedidos_finalizados;
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
    this.get_pedidos_empresa_finalizados();
  }

  get_pedidos(){
    this.pedidosProvider.get_pedidos_atendidos_empresa(localStorage.getItem('idempresa'))
    .then( res => {
      this.pedidos = res;
      console.log(this.pedidos);
    })
  }

  get_pedidos_empresa_finalizados(){
    this.pedidosProvider.get_pedidos_empresa_finalizados(localStorage.getItem('idempresa'))
    .then( res => {
      this.pedidos_finalizados = res;
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

}
