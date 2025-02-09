import { PizzaItem, PizzaPrice, PizzaSize } from '../app/models/pizza.model';

export const items: PizzaItem[] = [
  {
    itemId: 0,
    name: 'Margherita',
  },
  {
    itemId: 1,
    name: 'Pepperoni',
  },
];

export const itemPrices: PizzaPrice[] = [
  {
    itemId: 0,
    sizeId: 0,
    price: 3.99,
  },
  {
    itemId: 0,
    sizeId: 1,
    price: 5.99,
  },
  {
    itemId: 0,
    sizeId: 2,
    price: 7.99,
  },
  {
    itemId: 1,
    sizeId: 0,
    price: 4.42,
  },
  {
    itemId: 1,
    sizeId: 1,
    price: 6.52,
  },
  {
    itemId: 1,
    sizeId: 2,
    price: 8.62,
  },
];

export const itemSizes: PizzaSize[] = [
  {
    sizeId: 0,
    name: 'Small',
  },
  {
    sizeId: 1,
    name: 'Medium',
  },
  {
    sizeId: 2,
    name: 'Large',
  },
];
