export class Product {
  constructor (
    public quantity: number,
    public price: string,
    public available: boolean,
    public sublevel_id: string,
    public name: string,
    public id: string,
    public chosenQuantity?: number
  ) {
  }
}
