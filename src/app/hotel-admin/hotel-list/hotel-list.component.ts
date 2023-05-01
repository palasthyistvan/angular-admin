import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../hotel.model';
import { HotelService } from '../hotel-service.service';
import { DialogService } from 'src/app/shared/service/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
})
export class HotelListComponent implements OnInit {
  @Input() editable: boolean = false;
  pageNumber: number = 1;
  constructor(
    private hotelsService: HotelService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  public hotelData: Hotel[] = [];

  ngOnInit() {
    window.scroll(0, 0);
    this.getHotels(true);
  }

  navigateToManageHotel(id: string) {
    this.router.navigate(['/table', id]);
  }

  getHotels(fetchData: boolean) {
    if (fetchData) {
      this.hotelsService.fetchHotels(this.pageNumber).subscribe((response) => {
        this.pageNumber++;
        this.hotelData = this.hotelData.concat(response);
      });
    }
  }
}
