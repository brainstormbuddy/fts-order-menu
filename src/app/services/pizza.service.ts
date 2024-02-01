import { Injectable } from '@angular/core';

import { Pizza, PizzaPrice, PizzaSize } from '../models/pizza.model';
import { items, itemSizes, itemPrices } from '../../assets/data';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private _initialPizzas: Pizza[] = []; // This will hold the initial state
  private _sizes: PizzaSize[] = itemSizes;
  private _prices: PizzaPrice[] = itemPrices; // This will hold the prices for each pizza
  private _pizzas: Pizza[] = []; // This will be the working copy

  constructor() {
    this.loadInitialState();
  }

  /**
   * The function returns the value of the _pizzas property.
   * @returns The `_pizzas` property is being returned.
   */
  get Pizzas() {
    return this._pizzas;
  }

  loadInitialState() {
    // Load from `data.ts` or localStorage
    this._initialPizzas = JSON.parse(localStorage.getItem('pizzas') || '[]');

    if (this._initialPizzas.length === 0) {
      this._initialPizzas = items.map((item) => ({
        item: item,
        prices: this._prices
          .filter((price) => price.itemId === item.itemId)
          .map((price) => ({
            ...price,
            checked: true,
          })),
      }));
    }

    this._initialPizzas = this._initialPizzas.map((pizza) => ({
      ...pizza,
      changed: false,
    }));

    this._pizzas = JSON.parse(JSON.stringify(this._initialPizzas));
  }

  resetPizza(pizzaId: number) {
    const pizzaIndex = this._pizzas.findIndex(
      (pizza) => pizza.item.itemId === pizzaId
    );
    if (pizzaIndex >= 0) {
      this._pizzas[pizzaIndex] = JSON.parse(
        JSON.stringify(this._initialPizzas[pizzaIndex])
      );
    }
  }

  getSizeName(sizeId: number) {
    return this._sizes.find((size) => size.sizeId === sizeId)?.name || '';
  }

  saveChanges() {
    localStorage.setItem('pizzas', JSON.stringify(this._pizzas));
  }

  togglePizzaPrice(pizzaId: number, sizeId: number) {
    const pizzaIndex = this._pizzas.findIndex(
      (pizza) => pizza.item.itemId === pizzaId
    );
    if (pizzaIndex >= 0) {
      this._pizzas[pizzaIndex].changed = true;
      const priceIndex = this._pizzas[pizzaIndex].prices.findIndex(
        (price) => price.sizeId === sizeId
      );
      if (priceIndex >= 0) {
        const newPizza = JSON.parse(JSON.stringify(this._pizzas[pizzaIndex]));
        newPizza.prices[priceIndex].checked =
          !newPizza.prices[priceIndex].checked;

        this._pizzas[pizzaIndex] = newPizza;
      }
    }
  }

  updatePizzaPrice(pizzaId: number, sizeId: number, newPrice: number) {
    const pizzaIndex = this._pizzas.findIndex(
      (pizza) => pizza.item.itemId === pizzaId
    );
    if (pizzaIndex >= 0) {
      this._pizzas[pizzaIndex].changed = true;
      const priceIndex = this._pizzas[pizzaIndex].prices.findIndex(
        (price) => price.sizeId === sizeId
      );
      if (priceIndex >= 0) {
        // Create a new pizza object with the updated price
        const newPizza = JSON.parse(JSON.stringify(this._pizzas[pizzaIndex]));
        newPizza.prices[priceIndex].price = newPrice;

        // Replace the old pizza object with the new one
        this._pizzas[pizzaIndex] = newPizza;
      }
    }
  }
}
