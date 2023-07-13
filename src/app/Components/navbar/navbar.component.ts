import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { products } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  searchResult: undefined | products[];
  constructor(private router: Router, private productservice: ProductService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        }else{
          this.menuType = 'default';
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['']);
  }

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.productservice.queryProduct(element.value).subscribe((r) => {
        this.searchResult = r;
      })
    }
  }
  hideSearch(){
    this.searchResult = undefined;
  }

  submitSearch(val:string){
    this.router.navigate([`search/${val}`])
  }
}
