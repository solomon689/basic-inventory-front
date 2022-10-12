import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TableDataComponent } from './components/table-data/table-data.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductTableComponent,
    ProductModalComponent,
    TableDataComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductModalComponent,
  ]
})
export class HomeModule { }
