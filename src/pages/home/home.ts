import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  esta_logueado;
  inicio:any;
  productos:any;
  pedidos:any;
  categorias:any;
  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
    this.inicio = 'InicioPage';
    this.productos = 'ProductosPage';
    this.pedidos = 'PedidoPage';
    this.categorias = 'CategoriasPage';
  }

  ionViewDidLoad(){
    this.menuCtrl.enable(true);
   this.verificar_sesion();
  }

  verificar_sesion(){
    this.esta_logueado = localStorage.getItem('validate_sesion');
    if(this.esta_logueado != '1010'){
      this.navCtrl.setRoot('LoginPage');
    }
  }

}
