import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorLogTestComponent } from './decorator-log-test.component';

describe('DecoratorLogTestComponent', () => {
  let component: DecoratorLogTestComponent;
  let fixture: ComponentFixture<DecoratorLogTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratorLogTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorLogTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
