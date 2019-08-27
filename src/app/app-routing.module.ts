import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { AdminOrdersComponent } from './page/admin-orders/admin-orders.component';
import { AdminOrderEditComponent } from './page/admin-order-edit/admin-order-edit.component';
import { AdminNewOrderComponent } from './page/admin-new-order/admin-new-order.component';
import { AdminProductsComponent } from './page/admin-products/admin-products.component';
import { AdminProductEditComponent } from './page/admin-product-edit/admin-product-edit.component';
import { ContactComponent } from './page/contact/contact.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: 'admin/orders/add', component: AdminNewOrderComponent },
  { path: 'admin/orders/:id', component: AdminOrderEditComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/products/:id', component: AdminProductEditComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
