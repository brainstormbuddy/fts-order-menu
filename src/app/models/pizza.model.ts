export interface PizzaItem {
  itemId: number;
  name: string;
}

export interface PizzaSize {
  sizeId: number;
  name: string;
}

export interface PizzaPrice {
  itemId: number;
  sizeId: number;
  price: number;
  checked?: boolean;
}

export interface Pizza {
  item: PizzaItem;
  prices: PizzaPrice[];
  changed?: boolean;
}
