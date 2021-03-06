import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../models/store.model';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private ACC: string = environment.acc;
  private URL: string = environment.url;
  // viewList: boolean = true;
  getStore(): Observable<Store> {
    return this.http.get<Store>(`${this.URL}stores/${this.ACC}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}stores/${this.ACC}/products`);
  }

  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>(
      `${this.URL}stores/${this.ACC}/products/${id}`
    );
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.URL}stores/${this.ACC}/products/${id}`);
  }

  addProduct(product: any) {
    return this.http.post(`${this.URL}stores/${this.ACC}/products`, product);
  }

  getCategories() {
    return this.http.get(`${this.URL}stores/${this.ACC}/stats/categories`);
  }
}
