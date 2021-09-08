import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaroferComponent } from './editarofer.component';

describe('EditaroferComponent', () => {
  let component: EditaroferComponent;
  let fixture: ComponentFixture<EditaroferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaroferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaroferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
