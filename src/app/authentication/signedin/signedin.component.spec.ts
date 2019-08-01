import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedinComponent } from './signedin.component';

describe('SignedinComponent', () => {
  let component: SignedinComponent;
  let fixture: ComponentFixture<SignedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
