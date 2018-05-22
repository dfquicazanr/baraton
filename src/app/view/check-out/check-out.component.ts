import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Product} from '../../model/product';
import {ShoppingCartTool} from '../../tool/shopping-cart-tool';
import {ShoppingCart} from '../../model/shopping-cart';
import {ProductTool} from '../../tool/product-tool';
import {Toast, ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';

declare var numeral: any;

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  shoppingCart: ShoppingCart;
  products: Product[] = [];

  total = '$0.0';

  constructor(private router: Router, private toastr: ToastsManager, private vref: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vref);
  }

  ngOnInit() {
    this.shoppingCart = ShoppingCartTool.getShoppingCart();
    this.products = this.shoppingCart.products;
    this.calculateTotal();
  }

  change(value) {
    this.shoppingCart = ShoppingCartTool.getShoppingCart();
    this.products = this.shoppingCart.products;
    this.calculateTotal();
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].chosenQuantity * ProductTool.getNumberPrice(this.products[i]);
    }
    this.total = numeral(total).format('$0,0');
  }

  buy() {
    ShoppingCartTool.clearShoppingCart();
    this.toastr.success('Tus productos están en camino').then((toast: Toast) => {
      setTimeout(() => {
        this.toastr.dismissToast(toast);
        this.router.navigateByUrl('/');
      }, 1200);
    });
  }

}
