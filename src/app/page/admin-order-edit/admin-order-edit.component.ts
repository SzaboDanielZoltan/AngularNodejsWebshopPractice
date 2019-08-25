import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-admin-order-edit',
  templateUrl: './admin-order-edit.component.html',
  styleUrls: ['./admin-order-edit.component.css']
})
export class AdminOrderEditComponent implements OnInit {
  orderList$: Observable<any> = this.orderService.getAll('orders', 0); //így a teljes tömböt kapom vissza
  order: Order = new Order();
  
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  edit() { //nem működik még
    this.orderService.onPut('orders', JSON.stringify(this.order)).forEach(
      x => this.order
    )
  }
}
