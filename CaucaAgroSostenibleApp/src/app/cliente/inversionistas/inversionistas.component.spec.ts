import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversionistasComponent } from './inversionistas.component';

describe('InversionistasComponent', () => {
  let component: InversionistasComponent;
  let fixture: ComponentFixture<InversionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InversionistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InversionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
