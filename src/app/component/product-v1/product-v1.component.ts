import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';
import {ProductTool} from '../../tool/product-tool';

declare var numeral: any;

@Component({
  selector: 'app-product-v1',
  templateUrl: './product-v1.component.html',
  styleUrls: ['./product-v1.component.css']
})
export class ProductV1Component implements OnInit {
  @Input() product: Product;
  @Output() productChange = new EventEmitter();

  format = '0,0';
  subtotal = '$0';
  constructor() { }

  ngOnInit() {
    this.product.chosenQuantity = 0;
  }

  recalculateSubtotal() {
    this.subtotal = numeral(this.product.chosenQuantity * ProductTool.getNumberPrice(this.product)).format('$0,0');
    this.productChange.emit(this.product);
  }

}
