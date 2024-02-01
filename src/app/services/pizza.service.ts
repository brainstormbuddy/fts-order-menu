import { Injectable } from '@angular/core';

import { Pizza, PizzaPrice, PizzaSize } from '../models/pizza.model';
import { items, itemSizes, itemPrices } from '../../assets/data';
@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private _sizes: PizzaSize[] = itemSizes;
  private _prices: PizzaPrice[] = itemPrices;
  private _pizzas: Pizza[] = [
    {
      item: {
        itemId: 0,
        name: 'Margherita',
      },
      prices: [
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
      ],
    },
  ];

  constructor() {}

  get Pizzas() {
    return this._pizzas;
  }

  getSizeName(sizeId: number) {
    return this._sizes.find((size) => size.sizeId === sizeId)?.name || '';
  }
}
