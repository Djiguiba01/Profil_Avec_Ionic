import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopossemessagePageRoutingModule } from './popossemessage-routing.module';

import { PopossemessagePage } from './popossemessage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopossemessagePageRoutingModule
  ],
  declarations: [PopossemessagePage]
})
export class PopossemessagePageModule {}
