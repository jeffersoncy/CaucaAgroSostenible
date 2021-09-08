import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarorgComponent } from './editarorg.component';

describe('EditarorgComponent', () => {
  let component: EditarorgComponent;
  let fixture: ComponentFixture<EditarorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
