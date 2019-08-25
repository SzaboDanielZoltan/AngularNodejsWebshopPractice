import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-admin-new-order',
  templateUrl: './admin-new-order.component.html',
  styleUrls: ['./admin-new-order.component.css']
})
export class AdminNewOrderComponent implements OnInit {
  orderList$: Observable<any> = this.orderService.getAll('orders', 0);
  order: Order = new Order();

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  create() {
    this.orderService.onPost('orders', JSON.stringify(this.order)).forEach(
      x => this.order
    )
  }
}
