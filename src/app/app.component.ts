import {Component, OnInit, Output} from '@angular/core';
import {ProductService} from './service/product.service';
import {CategoryService} from './service/category.service';
import {Product} from './model/product';
import {Category} from './model/category';
import {ProductTool} from './tool/product-tool';

declare var numeral: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
