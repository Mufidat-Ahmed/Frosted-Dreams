import { Component, OnInit } from '@angular/core';
import { Info } from '../../../shared/models/Info';
import { ActivatedRoute } from '@angular/router';
import { BakeService } from '../../../services/bake.service';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  bake!: Info;
  constructor(activatedRoute:ActivatedRoute, bakeService:BakeService, 
    private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.bake = bakeService.getBakeById(params.id);
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.bake);
    this.router.navigateByUrl('/cart-page');
  }
}
