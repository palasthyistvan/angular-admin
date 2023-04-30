import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ManageHotelComponent } from './manage-hotel/manage-hotel.component';
import { ScrollDirective } from './scroll.directive';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './hotel-admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { HotelService } from './hotel-service.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HotelListComponent,
    ManageHotelComponent,
    ScrollDirective,
    AdminHomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ScrollingModule,
    RouterModule,
  ],
  exports: [HotelListComponent],
  providers: [HotelService],
})
export class HotelAdminModule {}
