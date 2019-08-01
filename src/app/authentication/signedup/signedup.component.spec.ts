import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedupComponent } from './signedup.component';

describe('SignedupComponent', () => {
  let component: SignedupComponent;
  let fixture: ComponentFixture<SignedupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
