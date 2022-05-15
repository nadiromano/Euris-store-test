import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
})
export class ProductsContainerComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products: Product[] = [];
  error: string = '';

  onGetProducts() {
    this.productService.getProducts().subscribe(
      (response) => (this.products = response),
      (error: any) => (this.error = error),
      () => console.log('done')
    );
  }

  onDeleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }

  ngOnInit(): void {
    this.onGetProducts();
  }
}
