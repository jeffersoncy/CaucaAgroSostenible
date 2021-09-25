import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEventoAdminComponent } from './listar-evento-admin.component';

describe('ListarEventoAdminComponent', () => {
  let component: ListarEventoAdminComponent;
  let fixture: ComponentFixture<ListarEventoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEventoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEventoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
