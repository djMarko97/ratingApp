import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreategymPage } from './creategym.page';

const routes: Routes = [
  {
    path: '',
    component: CreategymPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreategymPageRoutingModule {}
