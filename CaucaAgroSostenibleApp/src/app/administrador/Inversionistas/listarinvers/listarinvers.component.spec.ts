import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInversComponent } from './listarinvers.component';

describe('ListarInversComponent', () => {
  let component: ListarInversComponent;
  let fixture: ComponentFixture<ListarInversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});