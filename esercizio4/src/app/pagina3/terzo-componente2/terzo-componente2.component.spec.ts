import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzoComponente2Component } from './terzo-componente2.component';

describe('TerzoComponente2Component', () => {
  let component: TerzoComponente2Component;
  let fixture: ComponentFixture<TerzoComponente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerzoComponente2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerzoComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
