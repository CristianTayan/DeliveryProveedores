import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosAtendidosPage } from './pedidos-atendidos';

@NgModule({
  declarations: [
    PedidosAtendidosPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosAtendidosPage),
  ],
})
export class PedidosAtendidosPageModule {}
