import {Product} from './product';

export class Sublevel {
  constructor(
    public id: string,
    public name: string,
    public sublevels?: Sublevel[],
    public products?: Product[]
  ) {}
}
