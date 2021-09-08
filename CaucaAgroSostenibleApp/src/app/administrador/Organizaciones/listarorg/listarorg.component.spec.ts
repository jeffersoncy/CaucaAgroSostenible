import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarorgComponent } from './listarorg.component';

describe('ListarorgComponent', () => {
  let component: ListarorgComponent;
  let fixture: ComponentFixture<ListarorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
