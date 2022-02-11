import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Task3/product-list/product-list.component';
import { ProductsComponent } from './task4/products/products.component';
import { UsersListComponent } from './task4/users-list/users-list.component';
 
import { UsersComponent } from './task4/users/users.component';



const routes: Routes = [
  {path:"login", component:UsersComponent},
  {path:"addproduct", component:ProductsComponent},
  {path:"userlist",component:UsersListComponent},
  {path:"productlist",component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
