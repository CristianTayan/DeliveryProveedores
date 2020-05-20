import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-crear-categoria',
  templateUrl: 'crear-categoria.html',
})
export class CrearCategoriaPage {
  nombre;
  detalle;
  myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriasProvider: CategoriasProvider,
    private fb: FormBuilder, private statusBar: StatusBar) {
    this.myForm = this.fb.group({
      nombre: ['', Validators.compose([Validators.required])],
      detalle: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    this.statusBar.backgroundColorByHexString('#d3a200');
    this.statusBar.styleLightContent();
  }
  ionViewDidEnter(){
    this.statusBar.backgroundColorByHexString('#d3a200');
    this.statusBar.styleLightContent();
  }

  crear_categoria(){
    var data = {};
    data['IDEMPRESA'] = localStorage.getItem('idempresa');
    data['NOMBRE'] = this.nombre;
    data['DETALLE'] = this.detalle;
    this.categoriasProvider.registrar_clasificacion(data)
    .then(res => {
      console.log(res);
      this.navCtrl.pop();
    })
  }

}
