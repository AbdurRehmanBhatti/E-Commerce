import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  productData:undefined | products;
  productMessage:string | undefined;
  constructor(private route: ActivatedRoute, private productservice:ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.productservice.getProduct(productId).subscribe((result) => {
      this.productData = result;
    })
  }

  submit(data:products){
    if(this.productData){
      data.id = this.productData.id;
    }
    this.productservice.updateProduct(data).subscribe((result) => {
      if(result){
        this.productMessage = "Product Updated";
      }
    })
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
}
