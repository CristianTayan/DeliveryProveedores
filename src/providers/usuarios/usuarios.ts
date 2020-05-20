import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';

let rest_api = "http://192.168.1.13/app_compras/public/api/";

@Injectable()
export class UsuariosProvider {

  constructor(public http: HttpClient, public loadingController: LoadingController, public alertCtrl: AlertController) {
    console.log('Hello UsuariosProvider Provider');
  }
  async login(data) {
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.post(rest_api + 'login', data)
        .subscribe(
          data => {
            loading.dismiss();
            resolve(data);
          },
          err => {
            console.log(err);
            const alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: err.error.message,
              buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
          }
        )
    });
  }

  async get_info_empresa(idempresa) {
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.get(rest_api + 'buscar_empresa/'+idempresa)
        .subscribe(
          data => {
            loading.dismiss();
            resolve(data);
          },
          err => {
            console.log(err);
            const alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: err.error.message,
              buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
          }
        )
    });
  }
}
