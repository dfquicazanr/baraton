import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';
import {Router} from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
    this.product.chosenQuantity = 0;
  }

  goToProduct() {
    this.router.navigateByUrl('/product/' + this.product.id);
  }

}
