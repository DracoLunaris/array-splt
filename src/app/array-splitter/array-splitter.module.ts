import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySplitterComponent } from './array-splitter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArraySplitterComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ArraySplitModule { }
