import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  list$: Observable<any> = this.orderService.getAll('products', '0');
  orderKey: string = '';
  orderDirection: number = 1;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  onSort(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection == -1 ? 1 : -1;
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
  }
}
