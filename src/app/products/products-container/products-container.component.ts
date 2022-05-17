import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
})
export class ProductsContainerComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  products: Product[] = [];
  error: string = '';
  layout: string = 'list';
  idSelected: string = '';
  isOpen: boolean = false;
  products$!: Observable<Product[]>;
  // onGetProducts() {
  //   this.productService.getProducts().subscribe(
  //     (response) => (this.products = response),
  //     (error: any) => (this.error = error),
  //     () => console.log('done')
  //   );
  // }

  onDeleteProduct(id: string) {
    this.productService
      .deleteProduct(id)
      .subscribe(
        (data) => (this.products$ = this.productService.getProducts())
      );
  }

  switchView(layout: string) {
    this.layout = layout;
    console.log(layout);
  }

  onConfirm(id: string) {
    this.idSelected = id;
    this.isOpen = !this.isOpen;
  }

  onReviewSelect(id: string) {
    this.router.navigate(['/review', id]);
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
