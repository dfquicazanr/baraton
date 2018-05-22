import {Product} from '../model/product';
import {ValueFilter} from '../model/value-filter';

export class ProductTool {

  public static sortProductsByQuantity(products: Product[]) {
    products.sort( (a, b) => a.quantity - b.quantity);
    return products;
  }

  public static sortProductsByPrice(products: Product[]) {
    products.sort( (a, b) => this.getNumberPrice(a) - this.getNumberPrice(b));
    return products;
  }

  public static getMaxPrice(products: Product[]) {
    return this.getNumberPrice(this.sortProductsByPrice(products)[products.length - 1]);
  }

  public static getMaxQuantity(products: Product[]) {
    return this.sortProductsByQuantity(products)[products.length - 1].quantity;
  }

  public static getNumberPrice(product: Product): number {
    let stringPrice = product.price;
    stringPrice = stringPrice.slice(1);
    const split = stringPrice.split(',');
    stringPrice = '';
    for (let i = 0; i < split.length; i++) {
      stringPrice += split[i];
    }
    return +stringPrice;
  }

  public static filterByValues(products: Product[], valueFilter: ValueFilter) {
    const showedProducts: Product[] = [];
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (this.getNumberPrice(product) <= valueFilter.maxPrice
        && this.getNumberPrice(product) >= valueFilter.minPrice
        && product.quantity <= valueFilter.maxQuantity
        && product.quantity >= valueFilter.minQuantity
        && ((product.available && valueFilter.available) || (!product.available && valueFilter.notAvailable))) {
        showedProducts.push(product);
      }
    }
    return showedProducts;
  }

  public static filterByWord(products: Product[], word: string) {
    const showedProducts: Product[] = [];
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (product.name.indexOf(word) !== -1) {
        showedProducts.push(product);
      }
    }
    return showedProducts;
  }
}
