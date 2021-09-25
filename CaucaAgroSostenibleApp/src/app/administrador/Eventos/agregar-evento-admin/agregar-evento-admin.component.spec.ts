import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEventoAdminComponent } from './agregar-evento-admin.component';

describe('AgregarEventoAdminComponent', () => {
  let component: AgregarEventoAdminComponent;
  let fixture: ComponentFixture<AgregarEventoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEventoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEventoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
