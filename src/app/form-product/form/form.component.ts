import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  submit(f: NgForm) {
    let review: string[] = [];
    review.push(f.value.reviews);
    f.value.reviews = review;
    this.productService.addProduct(f.value);
  }
}
