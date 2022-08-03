import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Cart } from 'src/app/shared/Models/cart';
import { CartItem } from 'src/app/shared/Models/cartItem';
import { Foods } from 'src/app/shared/Models/food';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent implements OnInit {
  cart!: Cart

  constructor(private cs: CartService,private fs:FoodService) {
    this.setCart();
   }

  ngOnInit(): void {
    // let food = this.fs.getAll();
    // this.cs.addToCart(food[1]);
  }

  setCart() {
    this.cart = this.cs.getCart();
  }

  removeFromCart(ctItem: CartItem) {
    this.cs.removeFromCart(ctItem.food.id);
    this.setCart();
  }

  changeQty(ctItem: CartItem, qty: string) {
    const quantity = parseInt(qty);
    this.cs.changeQty(ctItem.food.id, quantity);
    this.setCart();
  }

}
