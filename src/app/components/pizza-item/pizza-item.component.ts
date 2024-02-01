import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaService } from '../../services/pizza.service';

import { PizzaPriceComponent } from '../pizza-price/pizza-price.component';

import { Pizza, PizzaPrice } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrl: './pizza-item.component.scss',
  imports: [CommonModule, PizzaPriceComponent],
  standalone: true,
})
export class PizzaItemComponent {
  @Input() pizza!: Pizza;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {}

  undo() {
    // Implement undo functionality here
    this.pizzaService.resetPizza(this.pizza.item.itemId);
  }

  trackByFn(index: number, price: PizzaPrice): number {
    return price.sizeId;
  }
}
