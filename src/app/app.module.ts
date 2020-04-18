import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { HomeComponent } from './frontend/home/home.component';
import { ShopComponent } from './frontend/shop/shop.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AdminComponent, DashboardComponent, ProductManagerComponent, HomeComponent, ShopComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
