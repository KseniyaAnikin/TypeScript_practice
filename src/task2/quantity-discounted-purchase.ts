import {AbstractPurchase} from './abstract-purchase';

export class QuantityDiscountedPurchase extends AbstractPurchase {
  requiredQuantity = 3;

  getCost(discount: number): number {
    if(this.quantity === this.requiredQuantity) {
      return this.product.cost =(this.product.cost - (this.product.cost * discount/100));
    } else {
      return this.product.cost;
    }
  }

}
