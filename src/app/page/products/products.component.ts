import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  list$: Observable<any> = this.orderService.getAll('products');

  constructor(
    private orderService: OrderService
  ) { }
  
  ngOnInit() {
  }

}
