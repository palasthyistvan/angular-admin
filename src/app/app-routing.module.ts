import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hotel',
    loadChildren: () =>
      import('./hotel-admin/hotel-admin.module').then(
        (m) => m.HotelAdminModule
      ),

    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
})
export class AppRoutingModule {}
