import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store-container',
  templateUrl: './store-container.component.html',
  styleUrls: ['./store-container.component.css'],
})
export class StoreContainerComponent implements OnInit {
  constructor(private productService: ProductService) {}
  store?: Store;
  error?: string;

  onGetStore(): void {
    this.productService.getStore().subscribe(
      (response) => (this.store = response),
      (error: any) => (this.error = error),
      () => console.log('done')
    );
  }

  ngOnInit(): void {
    this.onGetStore();
  }
}
