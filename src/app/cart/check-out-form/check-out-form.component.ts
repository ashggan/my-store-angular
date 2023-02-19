import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { checkOut } from 'src/app/state/cart/cart.action';
import { setUser } from 'src/app/state/user/user.action';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.scss'],
})
export class CheckOutFormComponent {
  user: User;

  constructor(private router: Router, private store: Store) {
    this.user = {
      name: '',
      address: '',
      credit_card: '',
    };
  }

  ngOnInit() {}

  checkOut() {
    this.store.dispatch(checkOut());
    this.store.dispatch(setUser({ newUser: this.user }));
    this.router.navigate(['/check-out']);
  }

  goHome() {
    this.router.navigate(['/product']);
  }
}
