import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  
  addProductMessage: string | undefined;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
  }

  submit(data:products){
    console.warn(data);
    this.productservice.addProducts(data).subscribe((result) => {
      console.warn(result);
      if(result){
        this.addProductMessage = 'Product Successfully Added'
      }
      setTimeout(() => this.addProductMessage = undefined,3000);
    })
  }

}
