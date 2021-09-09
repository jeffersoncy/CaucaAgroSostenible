import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInversComponent } from './editarinvers.component';

describe('EditarInversComponent', () => {
  let component: EditarInversComponent;
  let fixture: ComponentFixture<EditarInversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});