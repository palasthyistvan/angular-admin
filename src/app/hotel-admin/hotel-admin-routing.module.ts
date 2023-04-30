import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageHotelComponent } from './manage-hotel/manage-hotel.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'table',
  },
  {
    path: 'table',
    component: HotelListComponent,
  },
  {
    path: 'table/:id',
    component: ManageHotelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
