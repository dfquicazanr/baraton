import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {ProductTool} from '../../tool/product-tool';
import {TreeviewItem} from 'ngx-treeview';
import {CategoryTool} from '../../tool/category-tool';
import {SublevelTool} from '../../tool/sublevel-tool';
import {ValueFilter} from '../../model/value-filter';

declare var numeral: any;

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css'],
  providers: [ProductService, CategoryService]
})
export class Main2Component implements OnInit {

  products: Product[] = [];
  showedProducts: Product[] = [];
  categories: Category[] = [];

  maxProductsPrice = 0;
  maxProductsQuantity = 0;

  list = true;
  squareItems = false;

  items: TreeviewItem[] = [];

  sidenavOpen = false;
  sidenav;

  option = '1';
  orderBy;
  options = [
    {value: '1', label: 'Cantidad: menor a mayor'},
    {value: '2', label: 'Cantidad: mayor a menor'},
    {value: '3', label: 'Precio: menor a mayor'},
    {value: '4', label: 'Precio: mayor a menor'},
    {value: '5', label: 'Disponibilidad'},
  ];

  sublevelIds = [];
  valueFilter: ValueFilter = new ValueFilter(0, Number.MAX_VALUE, 0, Number.MAX_VALUE,
    true, true);

  searchWord = '';

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit() {
    this.sidenav = document.getElementById('sidenav');

    this.orderBy = this.options[0];
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
        this.items = CategoryTool.categoriesToItems(this.categories);
      });
  }

  setMaxs() {
    this.maxProductsPrice = ProductTool.getMaxPrice(this.products);
    this.maxProductsQuantity = ProductTool.getMaxQuantity(this.products);
  }

  toggleShow() {
    this.list = !this.list;
    this.squareItems = !this.squareItems;
  }

  toggleSidenav() {
    this.sidenav.classList.toggle('sidenav-toggled');
  }

  closeNav() {
    this.sidenav.classList.remove('sidenav-toggled');
  }

  order(option) {
    this.option = option.value;
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].value === this.option) {
        this.orderBy = this.options[i];
        this.refreshProducts();
        return;
      }
    }
  }

  filterByValues(valueFilter: ValueFilter) {
    this.valueFilter = valueFilter;
    this.refreshProducts();
  }

  filterBySublevels(sublevelIds) {
    this.sublevelIds = sublevelIds;
    this.refreshProducts();
  }

  findCoincidences() {
    this.refreshProducts();
  }

  refreshProducts() {
    this.showedProducts = this.products;
    this.showedProducts = ProductTool.filterByValues(this.showedProducts, this.valueFilter);
    this.showedProducts = SublevelTool.filterProductsBySublevel(this.sublevelIds, this.showedProducts);
    this.showedProducts = ProductTool.filterByWord(this.showedProducts, this.searchWord);
    switch (this.orderBy.value) {
      case '1':
        this.showedProducts = ProductTool.sortProductsByQuantity(this.showedProducts);
        break;
      case '2':
        this.showedProducts = ProductTool.sortProductsByQuantity(this.showedProducts);
        this.showedProducts.reverse();
        break;
      case '3':
        this.showedProducts = ProductTool.sortProductsByPrice(this.showedProducts);
        break;
      case '4':
        this.showedProducts = ProductTool.sortProductsByPrice(this.showedProducts);
        this.showedProducts.reverse();
        break;
      case '5':
        break;
      default:
        console.log(this.orderBy.value);
        break;
    }
  }
}
