import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './layout/nav/nav.component';
import { StoreContainerComponent } from './products/store-container/store-container.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsContainerComponent } from './products/products-container/products-container.component';
import { FormComponent } from './form-product/form/form.component';
import { FormsModule } from '@angular/forms';
import { LayoutSwitchComponent } from './layout/layout-switch/layout-switch.component';
import { AppRoutingModule } from './app.routing.module';
import { ReviewComponent } from './review/review.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StoreContainerComponent,
    ProductsContainerComponent,
    FormComponent,
    LayoutSwitchComponent,
    ReviewComponent,
    AnalyticsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
