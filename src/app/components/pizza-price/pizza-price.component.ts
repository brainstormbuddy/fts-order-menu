import { Component, Input, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PizzaService } from '../../services/pizza.service';

import { PizzaPrice } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza-price',
  templateUrl: './pizza-price.component.html',
  styleUrl: './pizza-price.component.scss',
  imports: [FormsModule],
  standalone: true,
})
export class PizzaPriceComponent implements OnChanges {
  @Input() pizzaPrice!: PizzaPrice;
  price: number = 0;

  constructor(private pizzaService: PizzaService) {}

  ngOnChanges(): void {
    if (!this.pizzaPrice.checked) {
      this.price = 0;
    } else {
      this.price = this.pizzaPrice.price;
    }
  }

  get sizeName() {
    return this.pizzaService.getSizeName(this.pizzaPrice.sizeId);
  }

  onPriceChange(event: any) {
    this.pizzaService.updatePizzaPrice(
      this.pizzaPrice.itemId,
      this.pizzaPrice.sizeId,
      event.target.value
    );
  }

  toggle() {
    this.pizzaService.togglePizzaPrice(
      this.pizzaPrice.itemId,
      this.pizzaPrice.sizeId
    );
  }
}
