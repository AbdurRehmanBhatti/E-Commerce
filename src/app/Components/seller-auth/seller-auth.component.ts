import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerservice: SellerService, private router:Router) { }

  ngOnInit():void{
    this.sellerservice.reloadSeller()
  }

  signup(data:SignUp):void{
    this.sellerservice.userSignUp(data)
  }
}
