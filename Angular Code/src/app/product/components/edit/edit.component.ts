import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productId: number;
  product: Product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private toastr: ToastrService, private router: Router) {

  }

  ngOnInit(): void {
    if (!this.productService.getProduct()) {
      this.route.params.subscribe(params => {
        this.productId = params['id'];
      });
      this.getProductById();
    } else {
      this.product = this.productService.getProduct();
    }
  }

  getProductById() {
    this.productService.getProductById(this.productId).subscribe(
      res => {
        this.product = res as Product;
      }, err => {
        console.log('Error in fetching product', err);
      }
    );
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(
      res => {
        this.toastr.success('Product updated successfully', 'Success');
      }, err => {
        console.log('Error in update', err);
      }
    );
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.productId).subscribe(
      res => {
        this.router.navigate(['/product/home']);
      }, err => {
        console.log('Error in delete', err);
      }
    );
  }

}
