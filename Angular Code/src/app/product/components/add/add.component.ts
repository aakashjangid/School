import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.productService.addProduct(this.product).subscribe(
      res => {
        if (res) {
          this.toastr.success('Product added successfully', 'Success');
          this.product = new Product();
        }
      }, err => {
        console.log('Error in adding a product', err);
        this.toastr.error('Please try again', 'Something went wrong!');
      }
    );
  }

}
