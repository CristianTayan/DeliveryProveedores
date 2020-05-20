import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myForm: FormGroup;
  correo;
  acceso;
  userData;
  nombre;
  user;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public statusBar: StatusBar,
    private menuCtrl:MenuController,private usuarioProvider: UsuariosProvider, public events: Events) {
    this.myForm = this.fb.group({
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      acceso: ['', Validators.compose([Validators.required])]
    });
    this.statusBar.backgroundColorByHexString('#d3a200');
    this.statusBar.styleLightContent();
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }
  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }

  login(){
    var data = {};
    data['correo']=this.correo;
    data['contrasena']=this.acceso;
    this.usuarioProvider.login(data)
    .then(data => {
      this.userData = data;
      this.navCtrl.setRoot(HomePage);
      localStorage.setItem('validate_sesion','1010');
      this.crear_sesion(this.userData)
    })
  }

  crear_sesion(user) {
    this.events.publish('user:signedIn',
      this.user =
      localStorage.setItem('userStorage', JSON.stringify(user))
    );

  }

}
