import {Component, EventEmitter, Input, OnInit, Output, ViewContainerRef} from '@angular/core';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {ProductTool} from '../../tool/product-tool';
import {ShoppingCartTool} from '../../tool/shopping-cart-tool';
import {Toast, ToastsManager} from 'ng2-toastr';

declare var numeral: any;

@Component({
  selector: 'app-product-v2',
  templateUrl: './product-v2.component.html',
  styleUrls: ['./product-v2.component.css']
})
export class ProductV2Component implements OnInit {
  @Input() product: Product;
  @Output() productChange = new EventEmitter();

  format = '0,0';
  subtotal = '$0';
  constructor(private router: Router, private toastr: ToastsManager, private vref: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vref);
  }

  ngOnInit() {
    if (!this.product.chosenQuantity) {
      this.product.chosenQuantity = 0;
    } else {
      this.subtotal = numeral(this.product.chosenQuantity * ProductTool.getNumberPrice(this.product)).format('$0,0');
    }
  }

  goToProduct() {
    this.router.navigateByUrl('/product/' + this.product.id);
  }

  recalculateSubtotal() {
    this.subtotal = numeral(this.product.chosenQuantity * ProductTool.getNumberPrice(this.product)).format('$0,0');
    ShoppingCartTool.updateProduct(this.product);
    this.productChange.emit(this.product);
  }

  removeProduct() {
    ShoppingCartTool.removeProduct(this.product);
    this.toastr.success(this.product.name + ' eliminado', null, {dissmiss: 'controlled'})
      .then((toast: Toast) => {
        setTimeout(() => {
          this.toastr.dismissToast(toast);
          this.productChange.emit(this.product);
        }, 1200);
      });
  }
}
