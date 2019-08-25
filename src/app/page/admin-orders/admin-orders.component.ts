import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  //orderList$: Observable<any> = this.orderService.getAll('orders', 0); //így a teljes tömböt kapom vissza
  orderList: Order[];
  order: Order = new Order();
  userSubscription: Subscription;
  selectedURL = '';
  selectedData = '';


  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
    this.selectedURL = this.router.url.split('/')[2];
    if (this.router.url.split('/')[3] != undefined) {
      this.selectedData = this.router.url.split('/')[3];
    };
  }

  ngOnInit() {
    /* this.os.getAll().subscribe(
      orders => this.list = orders,
      err => console.error(err)
    ); */
    this.userSubscription = this.orderService.getAll(this.selectedURL, this.selectedData).subscribe(
      orders => {
        this.orderList = orders;
        console.log(this.orderList);
      },
      err => console.error(err)
    );
  }

  deleteOrder(object) {
    this.orderService.onDelete(this.selectedURL, object.id).forEach(
      data => data
    )
    let index = this.orderList.indexOf(object);
    this.orderList.splice(index, 1);
    this.counter += 1;
  }

  

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
