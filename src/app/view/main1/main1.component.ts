import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {ProductTool} from '../../tool/product-tool';

declare var numeral: any;

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css'],
  providers: [ProductService, CategoryService]
})
export class Main1Component implements OnInit {

  products: Product[] = [];
  showedProducts: Product[] = [];
  categories: Category[] = [];

  orderedByPrice = false;
  orderedByQuantity = false;

  maxProductsPrice = 0;
  maxProductsQuantity = 0;

  totalQuantity = 0;
  totalPrice: any = '$0';

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe(products => {
        this.products = products.products;
        this.showedProducts = this.products;
        this.setMaxs();
      });
    this.categoryService
      .getProducts()
      .subscribe(categories => {
        this.categories = categories.categories;
      });
  }

  orderByQuantity() {
    if (this.orderedByQuantity) {
      this.showedProducts.reverse();
    } else {
      ProductTool.sortProductsByQuantity(this.showedProducts);
      this.orderedByQuantity = true;
      this.orderedByPrice = false;
    }
  }

  orderByPrice() {
    if (this.orderedByPrice) {
      this.showedProducts.reverse();
    } else {
      ProductTool.sortProductsByPrice(this.showedProducts);
      this.orderedByPrice = true;
      this.orderedByQuantity = false;
    }
  }

  setMaxs() {
    this.maxProductsPrice = ProductTool.getMaxPrice(this.products);
    this.maxProductsQuantity = ProductTool.getMaxQuantity(this.products);
  }

  refreshProducts(value) {
    this.showedProducts = value;
    this.orderedByPrice = false;
    this.orderedByQuantity = false;
    this.recalculateTotal();
  }

  recalculateTotal() {
    this.totalQuantity = 0;
    this.totalPrice = 0;
    for (let i = 0; i < this.showedProducts.length; i++) {
      this.totalQuantity += this.showedProducts[i].chosenQuantity;
      this.totalPrice += ProductTool.getNumberPrice(this.showedProducts[i]) * this.showedProducts[i].chosenQuantity;
    }
    this.totalPrice = numeral(this.totalPrice).format('$0,0');
  }
  buy() {
    localStorage.setItem('products', JSON.stringify(this.showedProducts));
  }

}
