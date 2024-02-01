import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaService } from '../../services/pizza.service';

import { PizzaItemComponent } from '../pizza-item/pizza-item.component';

import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [CommonModule, PizzaItemComponent],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss',
})
export class PizzaListComponent {
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzas = this.pizzaService.Pizzas;
    console.log('pizza-list-component ==>', this.pizzas);
  }
}
