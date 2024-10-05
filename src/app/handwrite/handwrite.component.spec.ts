import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwriteComponent } from './handwrite.component';

describe('HandwriteComponent', () => {
  let component: HandwriteComponent;
  let fixture: ComponentFixture<HandwriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandwriteComponent]
    });
    fixture = TestBed.createComponent(HandwriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
