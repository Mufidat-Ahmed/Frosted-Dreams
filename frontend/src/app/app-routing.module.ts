import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { StarComponent } from './components/partials/star/star.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SearchComponent } from './components/partials/search/search.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: StarComponent },
  { path: 'search/:searchTerm', component: SearchComponent },
  { path: 'bake/:id', component: DetailsComponent },
  { path: 'cart-page', component: CartPageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent},
  { path: 'checkout', component: CheckoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
