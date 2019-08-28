import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { AdminOrdersComponent } from './page/admin-orders/admin-orders.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { AdminOrderEditComponent } from './page/admin-order-edit/admin-order-edit.component';
import { AdminNewOrderComponent } from './page/admin-new-order/admin-new-order.component';
import { AdminProductsComponent } from './page/admin-products/admin-products.component';
import { AdminProductEditComponent } from './page/admin-product-edit/admin-product-edit.component';
import { AdminProductsFilterPipe } from './pipe/admin-products-filter.pipe';
import { AdminProductsSortPipe } from './pipe/admin-products-sort.pipe';
import { AdminOrderSortPipe } from './pipe/admin-order-sort.pipe';
import { AdminOrderFilterPipe } from './pipe/admin-order-filter.pipe';
import { ContactComponent } from './page/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { TermsComponent } from './page/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminOrdersComponent,
    NavComponent,
    ProductsComponent,
    ProductDetailsComponent,
    SorterPipe,
    FilterPipe,
    AdminOrderEditComponent,
    AdminNewOrderComponent,
    AdminProductsComponent,
    AdminProductEditComponent,
    AdminProductsFilterPipe,
    AdminProductsSortPipe,
    AdminOrderSortPipe,
    AdminOrderFilterPipe,
    ContactComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
