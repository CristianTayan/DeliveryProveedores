import { StatusBar } from '@ionic-native/status-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasProvider } from './../../providers/categorias/categorias';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';

/**
 * Generated class for the CrearProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-producto',
  templateUrl: 'crear-producto.html',
})
export class CrearProductoPage {
  idcategoria;
  idempresa = localStorage.getItem('idempresa');
  nombre;
  costo;
  descripcion;
  foto;
  categorias;
  myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private productosProvider: ProductosProvider
    ,private categoriasProvider: CategoriasProvider, private fb:FormBuilder, private statusBar: StatusBar) {
      this.myForm = this.fb.group({
        nombre: ['', Validators.compose([Validators.required])],
        idcategoria: ['', Validators.compose([Validators.required])],
        costo: ['', Validators.compose([Validators.required])],
        descripcion: ['', Validators.compose([Validators.required])]
      });
  }

  ionViewDidLoad() {
    this.statusBar.backgroundColorByHexString('#d3a200');
    this.statusBar.styleLightContent();
    this.get_categorias();
  }
  ionViewDidEnter(){
    this.statusBar.backgroundColorByHexString('#d3a200');
    this.statusBar.styleLightContent();
  }

  get_categorias(){
    this.categoriasProvider.get_clasificacion(localStorage.getItem('idempresa'))
    .then(res =>{
      this.categorias = res;
    })
  }

  agregar_producto(){
    var data = {};
    data['IDCATEGORIA'] =this.idcategoria;
    data['IDEMPRESA'] =this.idempresa;
    data['NOMBRE'] =this.nombre;
    data['COSTO'] =this.costo;
    data['DESCRIPCION'] =this.descripcion;
    data['FOTO'] =this.foto;
    this.productosProvider.registrar_productos(data)
    .then(res =>{
      console.log(res);
      this.navCtrl.pop();
    })
  }

  getPictureGallery() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 30
    }

    this.camera.getPicture(options)
      .then(imageData => {
        this.foto = 'data:image/jpeg;base64,' + imageData;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
