import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ShoppingCartTool} from '../../tool/shopping-cart-tool';
import {ShoppingCart} from '../../model/shopping-cart';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  shoppingCart: ShoppingCart;
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.shoppingCart = ShoppingCartTool.getShoppingCart();
    this.products = this.shoppingCart.products;
  }

}
