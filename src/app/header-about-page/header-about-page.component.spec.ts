import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAboutPageComponent } from './header-about-page.component';

describe('HeaderAboutPageComponent', () => {
  let component: HeaderAboutPageComponent;
  let fixture: ComponentFixture<HeaderAboutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAboutPageComponent]
    });
    fixture = TestBed.createComponent(HeaderAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
