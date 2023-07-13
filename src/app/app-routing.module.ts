import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SellerAuthComponent } from './Components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './Components/seller-home/seller-home.component';
import { AuthGuard } from './Components/Guard/auth.guard';
import { SellerLoginComponent } from './Components/seller-login/seller-login.component';
import { SellerAddProductComponent } from './Components/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './Components/seller-update-product/seller-update-product.component';
import { SearchComponent } from './Components/search/search.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'seller-auth', component:SellerAuthComponent},
  {path:'seller-home', component:SellerHomeComponent, canActivate:[AuthGuard]},
  {path:'seller-login', component:SellerLoginComponent},
  {path:'seller-add-product', component:SellerAddProductComponent, canActivate:[AuthGuard]},
  {path:'seller-update-product/:id', component:SellerUpdateProductComponent, canActivate:[AuthGuard]},
  {path:'search/:query', component:SearchComponent},
  {path:'product-details/:productId',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
