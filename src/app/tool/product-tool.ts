import {Product} from '../model/product';

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

  public static filter(products: Product[], minPrice: number = 0, maxPrice: number = Number.MAX_VALUE,
                       minQuantity: number = 0, maxQuantity: number = Number.MAX_VALUE,
                       available: boolean = false, notAvailable: boolean = false) {
    const showedProducts: Product[] = [];
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (this.getNumberPrice(product) <= maxPrice
        && this.getNumberPrice(product) >= minPrice
        && product.quantity <= maxQuantity
        && product.quantity >= minQuantity
        && ((product.available && available) || (!product.available && notAvailable))) {
        showedProducts.push(product);
      }
    }
    return showedProducts;
  }
}
