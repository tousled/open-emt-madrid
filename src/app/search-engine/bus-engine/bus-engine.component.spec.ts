import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusEngineComponent } from './bus-engine.component';

describe('BusEngineComponent', () => {
  let component: BusEngineComponent;
  let fixture: ComponentFixture<BusEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
