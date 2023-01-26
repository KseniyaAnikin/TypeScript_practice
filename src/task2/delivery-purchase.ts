import {AbstractPurchase} from './abstract-purchase';

export class DeliveryPurchase extends AbstractPurchase {
  getCost(extra: number): number {
    return this.product.cost = this._product.cost + extra;
  }
}
