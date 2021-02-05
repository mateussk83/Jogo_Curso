import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoracaoComponent } from './coracao.component';

describe('CoracaoComponent', () => {
  let component: CoracaoComponent;
  let fixture: ComponentFixture<CoracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
