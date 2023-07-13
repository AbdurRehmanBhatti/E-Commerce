import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts: products[] | undefined;
  trendyProduct: products[] | undefined;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.popularProduct().subscribe((result) => {
      console.warn(result);
      this.popularProducts = result;
    });
    this.productservice.trendyProduct().subscribe((r) => {
      this.trendyProduct = r;
    })
  }

    
  
}
