import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  products: Product[] = [];

  constructor(private encryptService: EncryptionService, private productService: ProductService,
    private router: Router) {
    this.user = JSON.parse(this.encryptService.decrypt(sessionStorage.getItem('encrypt')));
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      res => {
        this.products = res as Product[];
      }, err => {
        console.log('Error in getting products', err);
      }
    );
  }

  editProduct(product: Product) {
    this.productService.setProduct(product);
    this.router.navigate(['/product/edit/' + product.productId]);
  }

}
