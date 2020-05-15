import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

import { MatCardModule } from '@angular/material/card';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    ProductComponent, HeaderComponent,
    SideNavComponent, HomeComponent,
    AddComponent, EditComponent, UsersComponent, UserComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class ProductModule { }
