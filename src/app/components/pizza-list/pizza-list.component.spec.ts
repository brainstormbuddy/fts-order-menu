import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PizzaListComponent } from './pizza-list.component';
import { PizzaItemComponent } from '../pizza-item/pizza-item.component';
import { Pizza, PizzaSize } from '../../models/pizza.model';
import { CommonModule } from '@angular/common';
import { PizzaService } from '../../services/pizza.service';

describe('PizzaListComponent', () => {
  let component: PizzaListComponent;
  let fixture: ComponentFixture<PizzaListComponent>;

  const mockPizzas: Pizza[] = [
    {
      item: { itemId: 1, name: 'PizzaA' },
      prices: [{ itemId: 1, sizeId: 1, price: 10, checked: false }],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, PizzaItemComponent],
      providers: [
        {
          provide: PizzaService,
          useValue: {
            Pizzas: mockPizzas,
            getSizeName: (sizeId: PizzaSize) => 'Large',
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render pizza list', () => {
    const pizzaItems = fixture.debugElement.queryAll(
      By.directive(PizzaItemComponent)
    );
    expect(pizzaItems.length).toEqual(mockPizzas.length);
  });

  it('should use trackByFn correctly', () => {
    expect(component.trackByFn(0, mockPizzas[0])).toEqual(
      mockPizzas[0].item.itemId
    );
  });
});
