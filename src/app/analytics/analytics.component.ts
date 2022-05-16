import { Component, OnInit } from '@angular/core';
import { Store } from '../models/store.model';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
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
