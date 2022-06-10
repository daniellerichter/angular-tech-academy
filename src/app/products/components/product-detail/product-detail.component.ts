import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
import { mergeMap, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  product$: Observable<Product>;
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {




    this.activatedRoute.paramMap
      .pipe(
        mergeMap(paramMap => {
          const id = paramMap.get('id') as string;
          console.log('id', id);
          return this.productsService.getProductById(id)
        })
      )
      .subscribe(product => {
        this.product = product;
      })
  }

}
