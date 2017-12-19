import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeadComponent } from './user-head.component';

describe('UserHeadComponent', () => {
  let component: UserHeadComponent;
  let fixture: ComponentFixture<UserHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
