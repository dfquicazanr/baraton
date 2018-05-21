import {Product} from './product';

export class ShoppingCart {
  constructor (
    public products: Product[],
    public bought: boolean = false
  ) {}
}
