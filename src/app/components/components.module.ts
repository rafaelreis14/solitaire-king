import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';


@NgModule({
  imports:[
    IonicModule,
    CommonModule,
  ],

  declarations: [
    CardComponent,
  ],
  exports:[
    CardComponent,
  ],
  entryComponents: []
})
export class ComponentsModule {}
