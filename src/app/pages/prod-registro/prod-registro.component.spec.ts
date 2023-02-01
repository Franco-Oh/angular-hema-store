import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRegistroComponent } from './prod-registro.component';

describe('ProdRegistroComponent', () => {
  let component: ProdRegistroComponent;
  let fixture: ComponentFixture<ProdRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
