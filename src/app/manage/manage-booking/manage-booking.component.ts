import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/booking/shared/booking.service';
import { Booking } from 'src/app/booking/shared/booking.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.scss']
})
export class ManageBookingComponent implements OnInit {
  bookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingService.getUserBookings().subscribe(
      (bookings: Booking[]) => {
        this.bookings = bookings;
      },
      (error: HttpErrorResponse) => {}
    );
  }

}
