import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PizzaPriceComponent } from './pizza-price.component';
import { PizzaService } from '../../services/pizza.service';
import { PizzaPrice } from '../../models/pizza.model';

describe('PizzaPriceComponent', () => {
  let component: PizzaPriceComponent;
  let fixture: ComponentFixture<PizzaPriceComponent>;
  let pizzaService: PizzaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [PizzaService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPriceComponent);
    component = fixture.componentInstance;
    pizzaService = TestBed.inject(PizzaService);
    component.pizzaPrice = { itemId: 1, sizeId: 1, price: 10, checked: true };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display sizeName', () => {
    spyOn(pizzaService, 'getSizeName').and.returnValue('Large');
    fixture.detectChanges();
    const label = fixture.debugElement.query(
      By.css('.form-check-label')
    ).nativeElement;
    expect(label.textContent).toContain('Large');
  });

  it('should check/uncheck checkbox based on pizzaPrice.checked', () => {
    component.pizzaPrice = { sizeId: 1, checked: true, price: 10, itemId: 1 };
    fixture.detectChanges();
    const checkbox = fixture.debugElement.query(
      By.css('.form-check-input')
    ).nativeElement;
    expect(checkbox.checked).toBe(true);
  });

  it('should call pizzaService.updatePizzaPrice when onPriceChange is called', () => {
    const spy = spyOn(pizzaService, 'updatePizzaPrice');
    component.pizzaPrice = { sizeId: 1, checked: true, price: 10, itemId: 1 };
    fixture.detectChanges();
    component.onPriceChange({ target: { value: 20 } });
    expect(spy).toHaveBeenCalledWith(1, 1, 20);
  });

  it('should call pizzaService.togglePizzaPrice when toggle is called', () => {
    const spy = spyOn(pizzaService, 'togglePizzaPrice');
    component.pizzaPrice = { sizeId: 1, checked: true, price: 10, itemId: 1 };
    component.toggle();
    expect(spy).toHaveBeenCalledWith(1, 1);
  });

  it('should update the price when the input field changes', () => {
    component.pizzaPrice = { sizeId: 1, checked: true, price: 10, itemId: 1 };
    fixture.detectChanges();
    const input = fixture.debugElement.query(
      By.css('.form-control')
    ).nativeElement;
    input.value = '15';
    input.dispatchEvent(new Event('input'));
    expect(component.price).toBe(15);
  });
});
