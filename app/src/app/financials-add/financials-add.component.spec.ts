import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialsAddComponent } from './financials-add.component';

describe('FinancialsAddComponent', () => {
  let component: FinancialsAddComponent;
  let fixture: ComponentFixture<FinancialsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
