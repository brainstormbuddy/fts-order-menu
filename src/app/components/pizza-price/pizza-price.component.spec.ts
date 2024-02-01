import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPriceComponent } from './pizza-price.component';

describe('PizzaPriceComponent', () => {
  let component: PizzaPriceComponent;
  let fixture: ComponentFixture<PizzaPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzaPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
