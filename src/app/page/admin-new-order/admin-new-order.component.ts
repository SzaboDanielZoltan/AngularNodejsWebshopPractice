import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-new-order',
  templateUrl: './admin-new-order.component.html',
  styleUrls: ['./admin-new-order.component.css']
})
export class AdminNewOrderComponent implements OnInit {
  orderList$: Observable<any> = this.orderService.getAll('orders', 0);
  order: Order = new Order();
  selectedURL: string = '';
  dataToSend = '';

  constructor(
    private orderService: OrderService,
    private router: Router
    ) {
      this.selectedURL = this.router.url.split('/')[2];
    }

  ngOnInit() {
  }

  create(event: Event) {
    event.preventDefault();
    this.orderService.onPost(this.selectedURL, JSON.stringify(this.order)).forEach(
      x => this.order
    )
  }
}
