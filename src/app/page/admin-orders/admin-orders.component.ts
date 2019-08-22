import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  // list: Order[] = [];
  list$: Observable<any> = this.orderService.getAll('orders', 0); //így a teljes tömböt kapom vissza

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    /* this.os.getAll().subscribe(
      orders => this.list = orders,
      err => console.error(err)
    ); */
  }

}
