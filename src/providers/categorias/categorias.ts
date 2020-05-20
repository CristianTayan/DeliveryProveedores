import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

let rest_api = "http://192.168.1.13/app_compras/public/api/";

@Injectable()
export class CategoriasProvider {

  constructor(public http: HttpClient, public loadingController: LoadingController, public toastCtrl: ToastController) {
    console.log('Hello CategoriasProvider Provider');
  }

  async cat_prod_empresa(idempresa){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.get(rest_api + 'cat_prod_empresa/'+idempresa)
        .subscribe(
          data => {
            loading.dismiss();
            resolve(data);
          },
          err => {
            const toast = this.toastCtrl.create({
              message: err.error.message,
              duration: 3000
            });
            toast.present();
            loading.dismiss();
          }
        )
    });
  }

  async registrar_clasificacion(data){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.post(rest_api + 'registrar_clasificacion',data)
        .subscribe(
          data => {
            loading.dismiss();
            resolve(data);
          },
          err => {
            const toast = this.toastCtrl.create({
              message: err.error.message,
              duration: 3000
            });
            toast.present();
            loading.dismiss();
          }
        )
    });
  }

  async get_clasificacion(idcategoria){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.get(rest_api + 'get_clasificacion/'+idcategoria)
        .subscribe(
          data => {
            loading.dismiss();
            resolve(data);
          },
          err => {
            const toast = this.toastCtrl.create({
              message: err.error.message,
              duration: 3000
            });
            toast.present();
            loading.dismiss();
          }
        )
    });
  }

  async actualizar_clasificacion(data){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.post(rest_api + 'actualizar_clasificacion',data)
        .subscribe(
          data => {
            loading.dismiss();
            resolve(data);
          },
          err => {
            const toast = this.toastCtrl.create({
              message: err.error.message,
              duration: 3000
            });
            toast.present();
            loading.dismiss();
          }
        )
    });
  }
}
