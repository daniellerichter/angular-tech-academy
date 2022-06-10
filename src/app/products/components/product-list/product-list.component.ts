import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  displayProducts: Product[];
  searchControl = new FormControl('');

  constructor(private productsService: ProductsService, private router: Router) {
  }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.displayProducts = this.products;
      });


    this.searchControl.valueChanges.subscribe(value => {
      this.displayProducts = this.products.filter(product => {
        return product.name.toLowerCase().includes(value.toLowerCase());
      });
    })
  }

  openProduct(product: Product) {
    this.router.navigate(['detail', product.product_id])
  }
}
