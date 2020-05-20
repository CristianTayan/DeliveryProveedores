import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearDetallePage } from './crear-detalle';

@NgModule({
  declarations: [
    CrearDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(CrearDetallePage),
  ],
})
export class CrearDetallePageModule {}
