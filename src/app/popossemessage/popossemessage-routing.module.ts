import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopossemessagePage } from './popossemessage.page';

const routes: Routes = [
  {
    path: '',
    component: PopossemessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopossemessagePageRoutingModule {}
