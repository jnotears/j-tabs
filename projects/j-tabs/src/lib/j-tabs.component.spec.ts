import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JTabsComponent } from './j-tabs.component';

describe('JTabsComponent', () => {
  let component: JTabsComponent;
  let fixture: ComponentFixture<JTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
