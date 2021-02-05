import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogarComponent } from './jogar.component';

describe('JogarComponent', () => {
  let component: JogarComponent;
  let fixture: ComponentFixture<JogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
