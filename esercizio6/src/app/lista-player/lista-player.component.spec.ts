import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlayerComponent } from './lista-player.component';

describe('ListaPlayerComponent', () => {
  let component: ListaPlayerComponent;
  let fixture: ComponentFixture<ListaPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
