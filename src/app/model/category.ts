import {Sublevel} from './sublevel';

export class Category {
  constructor (
    public id: string,
    public name: string,
    public sublevels?: Sublevel[]
  ) {}
}
