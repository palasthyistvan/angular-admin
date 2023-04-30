import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel-service.service';
import { Hotel } from '../hotel.model';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DialogService } from 'src/app/shared/service/dialog.service';

@Component({
  selector: 'app-manage-hotel',
  templateUrl: './manage-hotel.component.html',
  styleUrls: ['./manage-hotel.component.css'],
})
export class ManageHotelComponent implements OnInit {
  hotel: Hotel;
  hotelId: number;
  form = this.fb.group({
    id: [],
    name: [''],
    imageUrl: [''],
    pricePerNight: [''],
    startDate: [''],
    endDate: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService,
    private fb: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.hotelId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.hotelService.getHotelById(this.hotelId).subscribe((hotel: Hotel) => {
      this.form.patchValue(hotel);
    });

    this.form.get('name').disable();
  }

  get f() {
    return this.form.controls;
  }

  deleteHotel() {
    this.dialogService
      .alert('Biztosan törli a szálláshelyet?', 'Törlés')
      .subscribe((data) =>
        this.hotelService
          .deleteHotel(this.hotelId)
          .subscribe(() => this.router.navigate(['/table']))
      );
  }

  updateHotel() {
    if (this.form.valid) {
      this.hotelService
        .updateHotel(this.hotelId, this.form.getRawValue())
        .subscribe(() => {
          this.router.navigate(['/table']);
        });
    }
  }
}
