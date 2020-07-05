import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';

let rest_api = "http://taptana.net/api/";

@Injectable()
export class PedidosProvider {

  constructor(public http: HttpClient, public loadingController: LoadingController, public alertCtrl: AlertController) {
    console.log('Hello PedidosProvider Provider');
  }

  async get_pedidos_empresa(idempresa) {
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.get(rest_api + 'get_pedidos_empresa/'+ idempresa)
        .subscribe(
          data => {
            loading.dismiss();
            resolve(data);
          },
          err => {
            const alert = this.alertCtrl.create({
              title: 'Ops¡',
              subTitle: err.error.message,
              buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
            console.log(err);
          }
        )
    });
  }

  async get_pedidos_atendidos_empresa(idempresa) {
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.get(rest_api + 'get_pedidos_atendidos_empresa/'+ idempresa)
        .subscribe(
          data => {
            loading.dismiss();
            resolve(data);
          },
          err => {
            const alert = this.alertCtrl.create({
              title: 'Ops¡',
              subTitle: err.error.message,
              buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
            console.log(err);
          }
        )
    });
  }

  async atender_dedidos(idpedido){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.get(rest_api + 'atender_pedidos/'+idpedido)
        .subscribe(
          data => {
            const alert = this.alertCtrl.create({
              title: 'PERFECTO',
              subTitle: 'Mira los detalles del pedido y atiendelo con la mayor brevedad posible',
              buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
            resolve(data);
          },
          err => {
            loading.dismiss();
          }
        )
    });
  }

  async pedidos_listos(idpedido){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.get(rest_api + 'listo_pedido_transportista/'+idpedido)
        .subscribe(
          data => {
            const alert = this.alertCtrl.create({
              title: 'PERFECTO',
              subTitle: 'Un transportista llegara enseguida',
              buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
            resolve(data);
          },
          err => {
            loading.dismiss();
          }
        )
    });
  }
  
  async get_usuario(idusuario){

    return new Promise(resolve => {
      this.http.get(rest_api + 'get_usuario/'+idusuario)
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
          }
        )
    });
  }
  

  async get_pedidos_empresa_finalizados(idempresa){

    return new Promise(resolve => {
      this.http.get(rest_api + 'get_pedidos_empresa_finalizados/'+idempresa)
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
          }
        )
    });
  }

  async get_direccion_por_id(iddireccion){

    return new Promise(resolve => {
      this.http.get(rest_api + 'get_direccion_por_id/'+iddireccion)
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
          }
        )
    });
  }

  async get_detalles_pedido(nropedido){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.get(rest_api + 'get_detallesPedido/'+nropedido)
        .subscribe(
          data => {
            loading.dismiss();
            resolve(data);
          },
          err => {
            loading.dismiss();
          }
        )
    });
  }
}
