import { Component, OnInit } from '@angular/core';
import { Store } from '../models/store.model';
import { ProductService } from '../services/products.service';
import { Chart, registerables } from 'chart.js';
import { tap } from 'rxjs';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  constructor(private productService: ProductService) {
    Chart.register(...registerables);
  }
  store?: Store;
  error?: string;
  chart: any = [];
  result: any;
  category: string[] = [];
  numberOfProducts: string[] = [];

  onGetStore(): void {
    this.productService
      .getStore()
      .pipe(tap((res) => console.log(res)))
      .subscribe(
        (response) => (this.store = response),
        (error: any) => (this.error = error),
        () => console.log('done')
      );
  }

  ngOnInit(): void {
    this.onGetStore();
    this.productService
      .getCategories()
      .pipe(tap((res) => console.log(res)))
      .subscribe((res) => {
        this.result = res;
        this.result.map((res: any) => this.category.push(res.category));
        this.result.map((res: any) =>
          this.numberOfProducts.push(res.numberOfProducts)
        );

        console.log(this.result);
        console.log(this.category);
        console.log(this.numberOfProducts);
        this.chart = new Chart('canvas', {
          type: 'polarArea',
          data: {
            labels: this.category,
            datasets: [
              {
                label: 'Categories',
                data: this.numberOfProducts,
                borderWidth: 1,
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(75, 192, 192)',
                  'rgb(255, 205, 86)',
                  'rgb(201, 203, 207)',
                  'rgb(54, 162, 235)',
                  'rgb(14, 154, 144)',
                  'rgb(125, 112, 8)',
                  'rgb(254,208,220)',
                  'rgb(12,208,220)',
                  'rgb(111,2,220)',
                ],
              },
            ],
          },
        });
      });
  }
}
