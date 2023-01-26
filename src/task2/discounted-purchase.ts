import {AbstractPurchase} from './abstract-purchase';
// import { Product } from './product';

export class DiscountedPurchase extends AbstractPurchase {

  // constructor(product: Product, quantity: number){
  //   super(product,quantity)
  // }  
  getCost(discount: number): number {
    return this.product.cost = (Math.floor(this.product.cost - (this.product.cost * discount/100)));
  }
}
