import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.scss'],
})
export class CheckOutFormComponent {
  user: User;
  @Output() checkOut: EventEmitter<User> = new EventEmitter();
  constructor() {
    this.user = {
      name: '',
      address: '',
      credit_card: '',
    };
  }

  ngOnInit() {}

  check(user: User) {
    this.checkOut.emit(user);
  }
}
