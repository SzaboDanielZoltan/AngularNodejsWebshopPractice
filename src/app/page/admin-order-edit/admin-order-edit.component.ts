import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-order-edit',
  templateUrl: './admin-order-edit.component.html',
  styleUrls: ['./admin-order-edit.component.css']
})
export class AdminOrderEditComponent implements OnInit {
  orderList$: Observable<any> = this.orderService.getAll('orders', 0); //így a teljes tömböt kapom vissza
  order: Order;
  selectedURL = '';
  dataToEdit = '';
  
  constructor(
    private orderService: OrderService,
    private router: Router
    ) {
      this.selectedURL = this.router.url.split('/')[2];
      this.dataToEdit = this.router.url.split('/')[3];
      this.orderService.getAll(this.selectedURL, this.dataToEdit).forEach(
        product => this.order = order
      )
    }

  ngOnInit() {
  }

  edit(event: Event) {
    event.preventDefault();
    this.orderService.onPut(this.selectedURL, JSON.stringify(this.order)).forEach(
      x => this.order
    )
  }
}
