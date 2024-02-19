import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoComponente1Component } from './secondo-componente1.component';

describe('SecondoComponente1Component', () => {
  let component: SecondoComponente1Component;
  let fixture: ComponentFixture<SecondoComponente1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondoComponente1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondoComponente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
