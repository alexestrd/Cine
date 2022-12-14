import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FUNCIONESComponent } from './funciones.component';

describe('FUNCIONESComponent', () => {
  let component: FUNCIONESComponent;
  let fixture: ComponentFixture<FUNCIONESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FUNCIONESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FUNCIONESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
