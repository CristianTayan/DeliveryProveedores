import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { StatusBar } from '@ionic-native/status-bar';
import { PedidosProvider } from '../../providers/pedidos/pedidos';

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
  iddireccion = this.navParams.get('iddireccion');
  nropedido = this.navParams.get('nropedido');
  estado = this.navParams.get('estado');
  idusuario = this.navParams.get('idusuario');
  subtotal = parseFloat(this.navParams.get('subtotal'));
  costo_envio = parseFloat(this.navParams.get('costo_envio')).toFixed(2);
  detalles;
  usuario;
  total;
  idpedido = localStorage.getItem('idpedido');
  constructor(public navCtrl: NavController, public navParams: NavParams, private pedidoProvider: PedidosProvider, 
    private callNumber: CallNumber, private statusBar: StatusBar, private pedidosProvider: PedidosProvider) {
  }

  ionViewDidLoad() {
    this.get_detalles();
    this.get_usuario();
    this.total_envio();
    this.statusBar.backgroundColorByHexString('#512DA8');
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleLightContent();
  }

  ionViewDidEnter(){
    this.statusBar.backgroundColorByHexString('#512DA8');
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleLightContent();
  }


  get_detalles() {
    this.pedidoProvider.get_detalles_pedido(this.nropedido)
      .then(res => {
        this.detalles = res;
        console.log(this.detalles);
      })
  }

  total_envio(){
    this.total = Number(this.subtotal) + Number(this.costo_envio);
    this.total = this.total.toFixed(2);
    console.log(this.total);
    
  }

  get_usuario() {
    this.pedidoProvider.get_direccion_por_id(this.iddireccion)
      .then(res => {
        this.usuario = res;
        console.log(this.usuario);
      })
  }

  llamar_usuario(numero) {
    this.callNumber.callNumber(numero, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  pedido_listo(){
    this.pedidosProvider.pedidos_listos(this.idpedido)
    .then(res => {
      console.log(res);
      this.navCtrl.setRoot('PedidosAtendidosPage');
    },(err) => {
      // this.navCtrl.setRoot(HomePage);
    })
  }
}
