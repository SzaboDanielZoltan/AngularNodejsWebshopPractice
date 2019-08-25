import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orderList$: Observable<any> = this.orderService.getAll('orders', 0); //így a teljes tömböt kapom vissza
  order: Order = new Order();

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit() {
    /* this.os.getAll().subscribe(
      orders => this.list = orders,
      err => console.error(err)
    ); */
  }

}
