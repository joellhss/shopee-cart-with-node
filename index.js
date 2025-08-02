import createItem from './services/item.js';
import * as cartService from './services/cart.js';

const cart = []

console.log("\n🎁 Welcome to the Shopee Cart Service!\n");

const item1 = await createItem("Shoes", 100, 2);
const item2 = await createItem("Shirt", 50, 3); 
const item3 = await createItem("Hat", 20, 5);
const item4 = await createItem("Socks", 10, 10);

await cartService.addItemToCart(cart, item1);
await cartService.addItemToCart(cart, item2);
await cartService.addItemToCart(cart, item3);
await cartService.addItemToCart(cart, item4);
await cartService.displayCart(cart);

await cartService.deleteItemFromCart(cart, item3.name);
await cartService.displayCart(cart);

await cartService.removeItemFromCart(cart, item4);
await cartService.removeItemFromCart(cart, item4);
await cartService.removeItemFromCart(cart, item4);
await cartService.displayCart(cart);
