import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInversComponent } from './agregarinvers.component';

describe('AgregarInversComponent', () => {
  let component: AgregarInversComponent;
  let fixture: ComponentFixture<AgregarInversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarInversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarInversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});