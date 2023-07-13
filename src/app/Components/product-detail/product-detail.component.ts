import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { products } from 'src/app/data-type';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productData : undefined | products;
  constructor(private activatedroute:ActivatedRoute, private productservice:ProductService) { }

  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get('productid');
    productid && this.productservice.getProduct(productid).subscribe((a) => {
      this.productData = a;
    })
  }

}
