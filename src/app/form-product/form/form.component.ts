import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  employees: string[] = [];
  isLoading: boolean = false;

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
    this.productService.addProduct(f.value).subscribe();
    this.isLoading = true;

    setTimeout(() => {
      this.router.navigate(['/home']);
      this.isLoading = false;
    }, 4000);
  }
}
