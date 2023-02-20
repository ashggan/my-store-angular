import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cartItem } from 'src/app/models/cartItem';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  cartList: cartItem[] = [];
  total: number;

  constructor(private cartService: CartService, private router: Router) {
    this.cartList = cartService.cartList;
    this.total = cartService.getTotalItems();
  }

  ngOnInit() {}

  removeItem(item: cartItem) {
    this.cartService.removeItem(item);
    this.cartList = this.cartService.cartList;
    this.total = this.cartService.getTotalItems();
    alert(`${item.product.name} is remove from your cart`);
  }

  checkOut(user: User) {
    this.total = this.cartService.getTotalItems();
    if (this.total === 0) alert(`You have no items in your cart !`);
    else {
      this.cartService.checkOut(user);
      this.total = this.cartService.getTotalItems();
      this.cartList = this.cartService.cartList;
      this.router.navigate(['/check-out']);
    }
  }
}
