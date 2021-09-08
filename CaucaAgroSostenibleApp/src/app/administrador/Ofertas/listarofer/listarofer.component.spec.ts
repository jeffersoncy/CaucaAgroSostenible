import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaroferComponent } from './listarofer.component';

describe('ListaroferComponent', () => {
  let component: ListaroferComponent;
  let fixture: ComponentFixture<ListaroferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaroferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaroferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
