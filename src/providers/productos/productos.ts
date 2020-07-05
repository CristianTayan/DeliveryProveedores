import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

let rest_api = "http://taptana.net/api/";

@Injectable()
export class ProductosProvider {

  constructor(public http: HttpClient, public loadingController: LoadingController, public toastCtrl: ToastController) {
    console.log('Hello ProductosProvider Provider');
  }


  async cambiar_estado_producto(idproducto){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.get(rest_api + 'cambiar_estado_producto/'+idproducto)
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

  async get_productos(idcategoria){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.get(rest_api + 'get_productos/'+idcategoria)
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

  async registrar_productos(data){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.post(rest_api + 'registrar_productos',data)
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

  async actualizar_productos(data){
    const loading = await this.loadingController.create({
      content: 'Cargando...'
    });
    await loading.present();
    return new Promise(resolve => {
      this.http.post(rest_api + 'actualizar_productos',data)
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
