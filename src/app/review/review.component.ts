import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  prova: string[] = ['gianni', 'lillo', 'franco'];
  public productId: any;
  product?: any;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.product = this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }
}
