import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesearchComponent } from './routesearch.component';

describe('RoutesearchComponent', () => {
  let component: RoutesearchComponent;
  let fixture: ComponentFixture<RoutesearchComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
