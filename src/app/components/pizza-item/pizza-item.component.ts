import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaService } from '../../services/pizza.service';

import { PizzaPriceComponent } from '../pizza-price/pizza-price.component';

import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza-item',
  standalone: true,
  imports: [CommonModule, PizzaPriceComponent],
  templateUrl: './pizza-item.component.html',
  styleUrl: './pizza-item.component.scss',
})
export class PizzaItemComponent {
  @Input() pizza!: Pizza;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {}

  undo() {
    // Implement undo functionality here
  }
}
