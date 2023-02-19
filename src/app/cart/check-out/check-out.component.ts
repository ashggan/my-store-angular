import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { userSelect } from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent {
  user$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.pipe(select(userSelect));
  }

  ngOnInit() {}
}
