import { Component, ViewChild } from '@angular/core';
import { Platform, Events, NavController, MenuController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FCM , NotificationData} from '@ionic-native/fcm';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  perfil: any = 'PerfilPage';
  mapa: any = 'MapaPage';

  @ViewChild('contenido') menu: NavController;

  nombre;
  correo;
  nombre_empresa;
  foto;
  userData;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public app: App, public events: Events, public menuCtrl: MenuController, private fcm: FCM) {
    platform.ready().then(() => {

      splashScreen.hide();

      events.subscribe('user:signedIn', (userEventData) => {
        this.userData = localStorage.getItem('userStorage');
        var usuario = JSON.parse(this.userData);
        for (let item of usuario) {
          this.nombre = item.nombre;
          this.correo = item.correo;
          localStorage.setItem('idusuario', item.idusuario);
          localStorage.setItem('correo', item.correo);
          localStorage.setItem('nombre', item.nombre);
          localStorage.setItem('celular', item.celular);
          localStorage.setItem('nombre_empresa', item.nombre_empresa);
          localStorage.setItem('idempresa', item.idempresa);
          localStorage.setItem('foto', item.foto);
        }
      });
    });

    this.nombre_empresa = localStorage.getItem('nombre_empresa');
    this.correo = localStorage.getItem('correo');
    this.foto = localStorage.getItem('foto');

    this.fcm.getToken()
    .then((token:string)=>{
      console.log(token);

      localStorage.setItem('token', token);
    })
    .catch(error =>{
      console.log(error); 
    });

    this.fcm.onTokenRefresh().subscribe((token:string)=>{
      console.log('tu token se actualizo '+token);
    });

    this.fcm.onNotification().subscribe(data =>{
      if(data.wasTapped){
        console.log("Estamos en segundo plano", JSON.stringify(data));
        this.app.getActiveNav().setRoot(HomePage); 
        // this.menu.setRoot(HomePage); 
      }else{
        this.app.getActiveNav().setRoot(HomePage);       
      }
    },error=>{
      console.log();
    })
  }

  openPage(pagina) {
    this.menu.setRoot(pagina);
    this.menuCtrl.close();
  }

  cerrar_sesion() {
    localStorage.clear();
    this.menu.setRoot('LoginPage');
    this.menuCtrl.close();
  }
}

