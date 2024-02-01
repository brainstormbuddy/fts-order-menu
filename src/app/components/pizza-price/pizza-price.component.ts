import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PizzaService } from '../../services/pizza.service';

import { PizzaPrice } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza-price',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pizza-price.component.html',
  styleUrl: './pizza-price.component.scss',
})
export class PizzaPriceComponent {
  @Input() pizzaPrice!: PizzaPrice;
  price: number = 0;

  constructor(private pizzaService: PizzaService) {}

  get sizeName() {
    return this.pizzaService.getSizeName(this.pizzaPrice.sizeId);
  }
}
