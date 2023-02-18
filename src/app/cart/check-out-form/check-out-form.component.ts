import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { checkOut } from 'src/app/state/cart/cart.action';

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
      c_card: '',
    };
  }

  ngOnInit() {}

  checkOut() {
    console.log(this.user);
    this.store.dispatch(checkOut());
    this.router.navigate(['/check-out']);
  }

  goHome() {}
}
