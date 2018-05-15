import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ProductTool} from '../../tool/product-tool';

declare var numeral: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];

  id = '';
  format = '0,0';
  subtotal = '$0';
  product: Product = new Product(0, '', false, '', '', '-1');

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe(products => {
        this.products = products.products;
        this.setProduct();
      }
    );
    this.route.params.subscribe(
      params => {
        this.id = params.id;
      }
    );
  }

  setProduct() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === this.id) {
        this.product = this.products[i];
        break;
      }
    }
    if (this.product.id === '-1') {
      this.router.navigateByUrl('/');
      return;
    }
  }

  recalculateSubtotal() {
    this.subtotal = numeral(this.product.chosenQuantity * ProductTool.getNumberPrice(this.product)).format('$0,0');
  }

  back() {
    this.router.navigateByUrl('/main2');
  }

}
