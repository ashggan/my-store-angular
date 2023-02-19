import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state/cart/cart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserReducer } from './state/user/user.reducer';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ProductModule,
    CartModule,
    HttpClientModule,
    // StoreModule.forFeature('cart', cartReducer),
    StoreModule.forRoot({ cart: cartReducer, user: UserReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
