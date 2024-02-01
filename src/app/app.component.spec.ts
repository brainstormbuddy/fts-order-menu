import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PizzaService } from './services/pizza.service';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let pizzaService: PizzaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [PizzaService],
      imports: [PizzaListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    pizzaService = TestBed.inject(PizzaService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveChanges on ngOnDestroy', () => {
    const spy = spyOn(pizzaService, 'saveChanges');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
