import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarorgComponent } from './agregarorg.component';

describe('AgregarorgComponent', () => {
  let component: AgregarorgComponent;
  let fixture: ComponentFixture<AgregarorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
