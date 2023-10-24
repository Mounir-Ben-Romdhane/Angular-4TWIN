import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ListusersComponent } from './listusers/listusers.component';
import { ListUserComponent } from './list-user/list-user.component';
import { BackgroundColorChangeDirective } from './background-color-change.directive';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AuthModule } from './core/manageUser/auth/auth.module';
import { MangeProductModule } from './core/mange-product/mange-product.module';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { MainInvoiceComponent } from './Atelier3/main-invoice/main-invoice.component';
import { InvoiceListComponent } from './Atelier3/invoice-list/invoice-list.component';
import { InvoiceComponent } from './Atelier3/invoice/invoice.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ListusersComponent,
    ListUserComponent,
    BackgroundColorChangeDirective,
    NotfoundComponent,
    LoginComponent,
    NavbarComponent,
    C1Component,
    C2Component,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    MangeProductModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
