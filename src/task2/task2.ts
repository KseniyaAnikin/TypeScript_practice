import {AbstractPurchase} from './abstract-purchase';
import {DiscountedPurchase} from './discounted-purchase';
import {DeliveryPurchase} from './delivery-purchase';
import {QuantityDiscountedPurchase} from './quantity-discounted-purchase';
import { Product } from './product';

const prod1: AbstractPurchase = new DiscountedPurchase(new Product('chokolad', 90), 5);
const prod2: AbstractPurchase = new DiscountedPurchase(new Product('book', 900), 2);
const prod3: AbstractPurchase = new DeliveryPurchase(new Product('bread', 80), 1);
const prod4: AbstractPurchase = new DeliveryPurchase(new Product('dress', 5000), 3);
const prod5: AbstractPurchase = new QuantityDiscountedPurchase(new Product('table', 15000), 2);
const prod6: AbstractPurchase = new QuantityDiscountedPurchase(new Product('pen', 150), 5);


const list: Array< AbstractPurchase> = [ prod1, prod2, prod3, prod4, prod5, prod6 ];

list.forEach(item => item.log())

console.log(AbstractPurchase.compare(list))



