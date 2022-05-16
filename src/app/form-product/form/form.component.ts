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
  employees: string[] = [];

  getEmployee() {
    this.productService
      .getStore()
      .subscribe((data) => this.employees.push(...data.employees));
    console.log(this.employees);
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  submit(f: NgForm) {
    let review: string[] = [];
    review.push(f.value.reviews);
    f.value.reviews = review;
    this.productService.addProduct(f.value);
  }
}
