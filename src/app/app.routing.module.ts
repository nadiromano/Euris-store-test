import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FormComponent } from './form-product/form/form.component';
import { ProductsContainerComponent } from './products/products-container/products-container.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'home', component: ProductsContainerComponent },
  { path: 'add-product', component: FormComponent },
  { path: 'review/:id', component: ReviewComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
