import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerMenuComponent } from './server-menu.component';

describe('ServerMenuComponent', () => {
  let component: ServerMenuComponent;
  let fixture: ComponentFixture<ServerMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerMenuComponent]
    });
    fixture = TestBed.createComponent(ServerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
