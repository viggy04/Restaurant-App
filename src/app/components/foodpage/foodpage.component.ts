import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Foods } from 'src/app/shared/Models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {

  food!: Foods;

  constructor(private fs: FoodService, private route: ActivatedRoute,private cs:CartService,private router:Router) {
    route.params.subscribe((params) => {
      if (params['id']) {
        this.food = fs.getFoodById(params['id']);
      }
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cs.addToCart(this.food);
    this.router.navigateByUrl("/cart");
  }

}
