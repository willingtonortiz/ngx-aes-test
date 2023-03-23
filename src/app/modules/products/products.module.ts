import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListPageComponent } from './ui/pages/product-list-page/product-list-page.component';
import { ProductItemComponent } from './ui/components/product-item/product-item.component';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: [ProductListPageComponent, ProductItemComponent],
})
export class ProductsModule {}
