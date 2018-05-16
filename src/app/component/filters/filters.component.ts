import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';
import {ProductTool} from '../../tool/product-tool';
import {ValueFilter} from '../../model/value-filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() products: Product[];
  @Input() showedProducts: Product[];
  @Input() set maxPrice( max: number) {
    if (max !== 0) {
      this.maxProductsPrice = max;
      this.priceRange[1] = this.maxProductsPrice;
    }
  }
  @Input() set maxQuantity( max: number) {
    if (max !== 0) {
      this.maxProductsQuantity = max;
      this.quantityRange[1] = this.maxProductsQuantity;
    }
  }

  @Output() changeShowedProducts: EventEmitter<ValueFilter> = new EventEmitter<ValueFilter>();

  maxProductsPrice = Number.MAX_VALUE;
  maxProductsQuantity = Number.MAX_VALUE;
  available = true;
  notAvailable = true;

  priceRange = [ 0 , Number.MAX_VALUE];
  quantityRange = [ 0 , Number.MAX_VALUE];

  constructor() { }

  ngOnInit() {
  }

  filter() {
    this.changeShowedProducts.emit(new ValueFilter(this.priceRange[0], this.priceRange[1],
      this.quantityRange[0], this.quantityRange[1],
      this.available, this.notAvailable));
  }
}
