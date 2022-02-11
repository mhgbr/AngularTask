import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { ContianerComponent } from './contianer/contianer.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { ProductListComponent } from './Task3/product-list/product-list.component';
import { ProductCardComponent } from './Task3/product-card/product-card.component';
import { FavoriteProductComponent } from './Task3/favorite-product/favorite-product.component';
import { StringslicePipe } from './_pipe/stringslice.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './task4/users/users.component';
import { UsersListComponent } from './task4/users-list/users-list.component';
import { ProductsComponent } from './task4/products/products.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    ContianerComponent,
    NavComponent,
    ContentComponent,
    ProductListComponent,
    ProductCardComponent,
    FavoriteProductComponent,
    StringslicePipe,
    UsersComponent,
    UsersListComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
