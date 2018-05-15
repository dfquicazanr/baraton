import { Component, OnInit } from '@angular/core';
import {TreeviewConfig, TreeviewItem} from 'ngx-treeview';
import {CategoryService} from '../../service/category.service';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {TreeViewTool} from '../../tool/tree-view-tool';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
  providers: [ProductService, CategoryService]
})
export class LeftSidebarComponent implements OnInit {

  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  products: Product[];
  categories: Category[];

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe(products => {
        this.products = products.products;
      });
    this.categoryService
      .getProducts()
      .subscribe(categories => {
        this.categories = categories.categories;
        this.items = TreeViewTool.categoryToTreeviewItems(this.categories);
        console.log(this.items.length);
      });
  }

  onFilterChange(value: string) {
    console.log('filter:', value);
  }

}
