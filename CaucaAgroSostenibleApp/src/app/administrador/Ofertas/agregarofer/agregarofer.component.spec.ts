import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaroferComponent } from './agregarofer.component';

describe('AgregaroferComponent', () => {
  let component: AgregaroferComponent;
  let fixture: ComponentFixture<AgregaroferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaroferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaroferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
