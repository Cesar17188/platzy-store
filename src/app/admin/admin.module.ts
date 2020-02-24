import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';

import { TableProductsComponent } from './components/table-products/table-products.component';
import { DashboardProductsComponent } from './components/dashboard-products/dashboard-products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [ProductFormComponent, NavComponent, TableProductsComponent, DashboardProductsComponent, ProductsListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
  ]
})
export class AdminModule { }
