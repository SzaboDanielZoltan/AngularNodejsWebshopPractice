import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  order:Order=new Order();
  number2=this.router.url.split('/')[2]

  product$: Observable<any> = this.orderService.getAll('products', this.number2 );

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  postNewOrder(){
    
    this.orderService.onPost('orders',JSON.stringify(this.order)).forEach(
      x=>this.order
    )
  }

}
