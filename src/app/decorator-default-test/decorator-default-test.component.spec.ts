import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorDefaultTestComponent } from './decorator-default-test.component';

describe('DecoratorDefaultTestComponent', () => {
  let component: DecoratorDefaultTestComponent;
  let fixture: ComponentFixture<DecoratorDefaultTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratorDefaultTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorDefaultTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
