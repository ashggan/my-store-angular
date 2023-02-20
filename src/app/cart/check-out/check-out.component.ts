import { Component } from '@angular/core';
import { CheckOutInfo } from 'src/app/models/CheckOutInfo';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent {
  info: CheckOutInfo;
  constructor(private cartService: CartService) {
    this.info = this.cartService.checkout_info;
  }

  ngOnInit() {}
}
