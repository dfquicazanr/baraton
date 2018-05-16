import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';
import { ProductV1Component } from './component/product-v1/product-v1.component';
import { FiltersComponent } from './component/filters/filters.component';
import {NouisliderModule} from 'ng2-nouislider';
import {TreeviewModule} from 'ngx-treeview';
import {NumericTextboxModule} from 'ngx-numeric-textbox';
import { Main1Component } from './view/main1/main1.component';
import { Main2Component } from './view/main2/main2.component';
import {AppRoutingModule} from './app-routing.module';
import { CheckOutComponent } from './view/check-out/check-out.component';
import { ProductV2Component } from './component/product-v2/product-v2.component';
import {SelectModule} from 'ng-select';
import { ProductV3Component } from './component/product-v3/product-v3.component';
import { ProductComponent } from './view/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    ProductV1Component,
    FiltersComponent,
    Main1Component,
    Main2Component,
    CheckOutComponent,
    ProductV2Component,
    ProductV3Component,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NouisliderModule,
    TreeviewModule.forRoot(),
    NumericTextboxModule,
    SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
