import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetalleComponent } from './prod-detalle.component';

describe('ProdDetalleComponent', () => {
  let component: ProdDetalleComponent;
  let fixture: ComponentFixture<ProdDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
