import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PizzaItemComponent } from './pizza-item.component';
import { PizzaPriceComponent } from '../pizza-price/pizza-price.component';

describe('PizzaItemComponent', () => {
  let component: PizzaItemComponent;
  let fixture: ComponentFixture<PizzaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaPriceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaItemComponent);
    component = fixture.componentInstance;
    component.pizza = {
      item: { itemId: 1, name: 'PizzaA' },
      prices: [],
      changed: true,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display pizza name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.accordion-button').textContent).toContain(
      'PizzaA'
    );
  });

  it('should call undo method when undo button is clicked', () => {
    spyOn(component, 'undo');
    const undoButton = fixture.debugElement.query(By.css('.btn')).nativeElement;
    undoButton.click();
    expect(component.undo).toHaveBeenCalled();
  });
});
