import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoComponente2Component } from './secondo-componente2.component';

describe('SecondoComponente2Component', () => {
  let component: SecondoComponente2Component;
  let fixture: ComponentFixture<SecondoComponente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondoComponente2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondoComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
