import { Pizza } from '../models/pizza.model';
import { PizzaService } from './pizza.service';

describe('PizzaService', () => {
  let service: PizzaService;

  beforeEach(() => {
    service = new PizzaService();
    localStorage.clear();
  });

  describe('loadInitialState', () => {
    it('should load pizzas from localStorage if available', () => {
      const pizzas: Pizza[] = [
        { item: { name: 'PizzaA', itemId: 1 }, prices: [], changed: false},
      ];
      localStorage.setItem('pizzas', JSON.stringify(pizzas));
      service.loadInitialState();
      expect(service['_pizzas']).toEqual(pizzas);
    });

    it('should load pizzas from data.ts if localStorage is empty', () => {
      service.loadInitialState();
      expect(service['_pizzas']).toEqual(service['_initialPizzas']);
    });
  });

  describe('resetPizza', () => {
    it('should reset the pizza with the given id to its initial state', () => {
      const pizzas = [{ item: { name: 'PizzaA', itemId: 1 }, prices: [] }];
      service['_pizzas'] = [...pizzas];
      service['_initialPizzas'] = [...pizzas];
      service.resetPizza(1);
      expect(service['_pizzas']).toEqual(service['_initialPizzas']);
    });

    it('should not change pizzas if the given id does not exist', () => {
      const pizzas = [{ item: { name: 'PizzaA', itemId: 1 }, prices: [] }];
      service['_pizzas'] = [...pizzas];
      service['_initialPizzas'] = [...pizzas];
      service.resetPizza(2);
      expect(service['_pizzas']).toEqual(service['_initialPizzas']);
    });
  });

  describe('getSizeName', () => {
    it('should return the name of the size with the given id if it exists', () => {
      service['_sizes'] = [{ sizeId: 1, name: 'Small' }];
      expect(service.getSizeName(1)).toEqual('Small');
    });

    it('should return an empty string if the size with the given id does not exist', () => {
      service['_sizes'] = [{ sizeId: 1, name: 'Small' }];
      expect(service.getSizeName(2)).toEqual('');
    });
  });
});
