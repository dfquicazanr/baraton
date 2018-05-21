import {ShoppingCart} from '../model/shopping-cart';
import {Product} from '../model/product';

export class ShoppingCartTool {

  public static storeShoppingCart(shoppingCart: ShoppingCart) {
    localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));
  }

  public static updateProducts(products: Product[]) {
    const shoppingCart = this.getShoppingCart();
    shoppingCart.products = products;
    this.storeShoppingCart(shoppingCart);
  }

  public static getShoppingCart(): ShoppingCart {
    if (!localStorage.getItem('shopping_cart')) {
      this.clearShoppingCart();
    }
    return JSON.parse(localStorage.getItem('shopping_cart'));
  }

  public static clearShoppingCart() {
    const shoppingCart = new ShoppingCart([], true);
    this.storeShoppingCart(shoppingCart);
  }

  public static hasProduct(product: Product): boolean {
    const products = this.getShoppingCart().products;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        return true;
      }
    }
    return false;
  }

  public static getProduct(product: Product): Product {
    const products = this.getShoppingCart().products;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        return products[i];
      }
    }
    return product;
  }

  public static addProduct(product: Product) {
    const products = this.getShoppingCart().products;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        products[i] = product;
      }
    }
    products.push(product);
    this.updateProducts(products);
  }

  public static removeProduct(product: Product) {
    const products = this.getShoppingCart().products;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        products.splice(i, 1);
      }
    }
    this.updateProducts(products);
  }
}
