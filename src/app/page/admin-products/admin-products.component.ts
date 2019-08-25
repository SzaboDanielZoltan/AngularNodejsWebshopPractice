import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  userSubscription: Subscription;
  productList: Product[];
  urlForServer = '';
  oneOfTheDatas = '';
  orderDirection: number = 1;
  orderKey: string = 'id';
  filterPhrase: string = '';
  counter: number = 0;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
    this.urlForServer = this.router.url.split('/')[2];
    if (this.router.url.split('/')[3] != undefined) {
      this.oneOfTheDatas = this.router.url.split('/')[3];
    };
  }

  deleteProduct(deleteObj) {
    this.orderService.onDelete(this.urlForServer, deleteObj.id).forEach(
      data => data
    )
    let index = this.productList.indexOf(deleteObj);
    this.productList.splice(index, 1);
    this.counter++;
  }

  setSorterKey(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection === -1 ? 1 : -1;
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
    Array.from(document.querySelectorAll('table thead th.thtitle')).forEach(
      el => el.children[0] !== undefined ? el.removeChild(el.children[0]) : el);
    if (this.orderDirection === 1) {
      document.querySelector(`.${key}`).innerHTML += '<i class="fa fa-sort-asc" aria-hidden="true"></i>';
    } else {
      document.querySelector(`.${key}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
    }
  }

  ngOnInit() {
    this.userSubscription = this.orderService.getAll(this.urlForServer, this.oneOfTheDatas).subscribe(
      products => {
        this.productList = products;
        console.log(this.productList);
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
