import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() name: string;
  @Input() price: number;
  @Input() image: string;
  safeImage: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeImage = this.domSanitizer.bypassSecurityTrustUrl(this.image);
  }

}
