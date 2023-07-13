import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { products } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchresult:undefined | products[];
  constructor(private activeroute:ActivatedRoute, private productservice:ProductService) { }

  ngOnInit(): void {
    let query = this.activeroute.snapshot.paramMap.get('query');
    console.warn(query)
    query && this.productservice.queryProduct(query).subscribe((r) => {
      this.searchresult = r;
    })
  }

}
