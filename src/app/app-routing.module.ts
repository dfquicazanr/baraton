import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {Main1Component} from './view/main1/main1.component';
import {Main2Component} from './view/main2/main2.component';
import {CheckOutComponent} from './view/check-out/check-out.component';
import {ProductComponent} from './view/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/main2', pathMatch: 'full' },
  { path: 'main1', component: Main1Component },
  { path: 'main2', component: Main2Component },
  { path: 'checkOut', component: CheckOutComponent },
  { path: 'product', children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: ':id', component: ProductComponent }
    ] },

];

const config: ExtraOptions = {
  /*useHash: true,*/
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
