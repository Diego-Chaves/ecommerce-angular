import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
