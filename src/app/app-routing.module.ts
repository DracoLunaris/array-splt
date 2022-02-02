import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArraySplitterComponent } from './array-splitter/array-splitter.component';


const routes: Routes = [
  { path: '', component: ArraySplitterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
