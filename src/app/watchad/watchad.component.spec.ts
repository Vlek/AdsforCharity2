import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchadComponent } from './watchad.component';

describe('WatchadComponent', () => {
  let component: WatchadComponent;
  let fixture: ComponentFixture<WatchadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
