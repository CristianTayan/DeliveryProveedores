import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  esta_logueado;
  inicio: any;
  productos: any;
  pedidos: any;
  categorias: any;
  lista_pedidos: any;
  pedidos_atendidos: any;
  constructor(public navCtrl: NavController, private menuCtrl: MenuController, private usuarioProvider: UsuariosProvider) {
    this.inicio = 'InicioPage';
    this.productos = 'ProductosPage';
    this.pedidos = 'PedidoPage';
    this.lista_pedidos = 'ListaPedidosPage';
    this.categorias = 'CategoriasPage';
    this.pedidos_atendidos = 'PedidosAtendidosPage';
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    this.add_fcm_token();
    this.verificar_sesion();
  }

  add_fcm_token() {
    if (localStorage.getItem('correo')) {
      var data = {};
      data['correo'] = localStorage.getItem('correo');
      data['token'] = localStorage.getItem('token');
      this.usuarioProvider.FCM_Token(data)
        .then(res => {
          console.log(res);
        })
    }
    else{
      console.log("No ha iniciado sesion");
      
    }

  }

  verificar_sesion() {
    this.esta_logueado = localStorage.getItem('validate_sesion');
    if (this.esta_logueado != '1010') {
      this.navCtrl.setRoot('LoginPage');
    }
  }

}
