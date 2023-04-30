import { Injectable } from '@angular/core';
import { Hotel } from './hotel.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private baseUrl = 'http://localhost:3000';

  public hotelCount: number = 50;

  constructor(private http: HttpClient) {}

  fetchHotels(currentLength: number, page: number) {
    return this.getHotels(page, this.hotelCount).pipe(
      map((hotels: Hotel[]) => {
        return hotels.filter((hotel: Hotel) => {
          const idAsNumber = parseInt(hotel.id.toString());
          return (
            idAsNumber > currentLength &&
            idAsNumber < currentLength + this.hotelCount + 1
          );
        });
      })
    );
  }

  updateHotel(id: number, hotelData: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.baseUrl}/hotels/${id}`, hotelData);
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.baseUrl}/hotels/${id}`);
  }

  getHotels(page: number, limit: number): Observable<Hotel[]> {
    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());
    return this.http.get<Hotel[]>(`${this.baseUrl}/hotels`, { params });
  }

  deleteHotel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/hotels/${id}`);
  }
}
