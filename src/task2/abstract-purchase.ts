import { Product } from "./product";

export abstract class AbstractPurchase {
  _product: Product;
  _quantity: number;
  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  get product():Product {
    return this._product;
  }

  set product(value: Product) {
      this._product = value;
  }

  get quantity():number {
    return this._quantity;
  }

  set quantity(value: number) {
      this._quantity = value;
  }

  abstract getCost(sum: number): number;

  public log():void {
    console.log(`${this.product.log()}; ${this.quantity} шт`);
  }

  static compare(purchases:Array<AbstractPurchase>): Array<AbstractPurchase> {
    return purchases.sort((a, b) => {
       return b.product.cost - a.product.cost;
    }
    );
 }
}
