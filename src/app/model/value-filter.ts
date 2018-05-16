export class ValueFilter {
  constructor (
    public minPrice: number,
    public maxPrice: number,
    public minQuantity: number,
    public maxQuantity: number,
    public available: boolean,
    public notAvailable: boolean
  ) {}
}
