import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarKemitraanPage } from './daftar-kemitraan.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarKemitraanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarKemitraanPageRoutingModule {}
