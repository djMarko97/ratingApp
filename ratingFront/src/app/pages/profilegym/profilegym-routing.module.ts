import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilegymPage } from './profilegym.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilegymPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilegymPageRoutingModule {}
