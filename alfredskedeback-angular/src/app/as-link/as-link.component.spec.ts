import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsLinkComponent } from './as-link.component';

describe('AsLinkComponent', () => {
  let component: AsLinkComponent;
  let fixture: ComponentFixture<AsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
