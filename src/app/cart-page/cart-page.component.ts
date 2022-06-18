import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart
  constructor(private cardService:CartService) {
    this.setCart()
   }
   ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cardService.removeFromCart(cartItem.food.id)
    this.setCart()
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cardService.changeQuantity(cartItem.food.id, quantity )
    this.setCart()
  }

  setCart(){
    this.cart=this.cardService.getCart()
  }
}
