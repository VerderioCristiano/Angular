import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzoComponente1Component } from './terzo-componente1.component';

describe('TerzoComponente1Component', () => {
  let component: TerzoComponente1Component;
  let fixture: ComponentFixture<TerzoComponente1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerzoComponente1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerzoComponente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
