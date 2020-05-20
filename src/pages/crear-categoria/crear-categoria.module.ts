import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearCategoriaPage } from './crear-categoria';

@NgModule({
  declarations: [
    CrearCategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearCategoriaPage),
  ],
})
export class CrearCategoriaPageModule {}
