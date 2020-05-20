
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
} from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map: GoogleMap;
  myPosition;
  latitud;
  longitud;
  descripcion;
  geoAccuracy: number;
  geoAddress: string;
  calle_principal;
  watchLocationUpdates: any;
  loading: any;
  isWatching: boolean;
  lat;
  lng;

  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    private nativeGeocoder: NativeGeocoder, private toastCtrl: ToastController,private statusBar: StatusBar ) {
  }

  ionViewDidLoad() {
    this.loadMap();
    this.statusBar.backgroundColorByHexString('#d3a200');
    this.statusBar.styleLightContent();
  }

  ionViewDidEnter(){
    this.statusBar.backgroundColorByHexString('#d3a200');
    this.statusBar.styleLightContent();
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904, // default location
          lng: -89.3809802 // default location
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create("map", mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.getPosition();
    });

  }

  getPosition(): void{
    this.map.getMyLocation()
    .then(response => {
      this.map.moveCamera({
        target: response.latLng
      });
    })
    .catch(error =>{
      console.log(error);
    });
  }

  click(){
    var target = this.map.getCameraTarget();
    this.getGeoencoder(target.lat,target.lng);
    this.latitud = target.lat;
    this.longitud = target.lng;
  }

  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderReverseResult[]) => {
        console.log(result[0]);

        var nro = result[0].subThoroughfare;
        var calle = result[0].thoroughfare;
        var provincia = result[0].administrativeArea;
        var pais = result[0].countryCode;
        var direccion =  calle+', '+ nro+', '+provincia;
        this.geoAddress = direccion;
        this.calle_principal = result[0].thoroughfare;
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  guardar_direccion(){
    var data = {};
    data['IDEMPRESA'] = localStorage.getItem('idempresa');
    data['COORDENADAX'] = this.latitud;
    data['COORDENADAY'] = this.longitud;
    data['DIRECCION'] = this.geoAddress;
    data['CALLE_PRINCIPAL'] = this.calle_principal;
    console.log(data);

    // this.direccionesProvider.registrar_direcciones(data)
    // .then( res =>{
    //   let toast = this.toastCtrl.create({
    //     message: 'Dirección de entreega agregada',
    //     duration: 3000,
    //     position: 'bottom'
    //   });
    // })
    // this.navCtrl.pop();
  }
}
