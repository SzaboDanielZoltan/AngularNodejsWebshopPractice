import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  /* orders: Order[] = [
    new Order(),
    new Order(),
    new Order(),
  ]; */

  constructor(
    private http: HttpClient
  ) { }

  getAll(jsonFileName, id): Observable<any> {
    return this.http.get(`http://localhost:3210/${jsonFileName}/${id}`);
    /* return new Observable(observer => {
      observer.next(this.orders);
    }) */
  }

  onPost(jsonFileName, newObj) {
    return this.http.post(`http://localhost:3210/${jsonFileName}`, newObj)
  }

  onPut(jsonFileName, modifiedObj) {
    return this.http.put(`http://localhost:3210/${jsonFileName}`, modifiedObj)
  }

  onDelete(jsonFileName, id) {
    return this.http.delete(`http://localhost:3210/${jsonFileName}/${id}`);
  }

}
