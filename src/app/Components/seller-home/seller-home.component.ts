import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList:undefined | products[];
  deleteMessage:undefined | string;
  delete = faTrash;
  edit = faPencilAlt;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id:number){
    this.productservice.deleteProduct(id).subscribe((result) => {
      if(result){
        this.deleteMessage = 'This product is Deleted';
        this.list();
      }
    })

    setTimeout(() => {
      this.deleteMessage = undefined;
    }, 3000);
  }

  list(){
    this.productservice.productList().subscribe((result) =>{
      console.warn(result);
      if(result){
      this.productList = result;
      }
    })
  }
}
