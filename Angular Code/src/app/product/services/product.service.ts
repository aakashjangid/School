import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product;

  getProduct() {
    return this.product;
  }

  setProduct(product: Product) {
    this.product = product;
  }

  BASE_URL: string = 'http://' + window.location.hostname + ':8080';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.BASE_URL + '/products/getAllProducts');
  }

  addProduct(product) {
    return this.http.post(this.BASE_URL + '/products/addProduct', product);
  }

  getProductById(id) {
    return this.http.get(this.BASE_URL + '/products/getProductById/' + id);
  }

  updateProduct(product: Product) {
    return this.http.post(this.BASE_URL + '/products/updateProduct', product);
  }

  deleteProduct(id) {
    return this.http.get(this.BASE_URL + '/products/deleteProduct/' + id);
  }
}
