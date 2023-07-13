import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { SignUp, login } from '../../data-type';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {
  showLogin = false;
  authError: string = '';

  constructor(private sellerservice: SellerService) { }

  ngOnInit(): void {
  }

  login(data:login ):void{
    this.authError = '';
    // console.warn(data);
    this.sellerservice.userLogin(data);
    this.sellerservice.isloginError.subscribe((error) => {
      this.authError = "Either Email or Password is incorrect "
    })
  }
}
