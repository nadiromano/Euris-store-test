import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form-product/form/form.component';
import { ProductsContainerComponent } from './products/products-container/products-container.component';
import { ReviewsContainerComponent } from './reviews/reviews-container/reviews-container.component';

const routes: Routes = [
  { path: 'home', component: ProductsContainerComponent },
  { path: 'add-product', component: FormComponent },
  { path: 'review', component: ReviewsContainerComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
