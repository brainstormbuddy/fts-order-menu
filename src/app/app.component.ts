import { Component, HostListener, OnDestroy } from '@angular/core';

import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  constructor(private _pizzaService: PizzaService) {}

  @HostListener('window:beforeunload', ['$event'])
  saveChanges($event: any): void {
    this._pizzaService.saveChanges();
  }

  ngOnDestroy(): void {
    // Save changes to localStorage
    this._pizzaService.saveChanges();
  }
}
