import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaneshBundobustComponent } from './ganesh-bundobust.component';

describe('GaneshBundobustComponent', () => {
  let component: GaneshBundobustComponent;
  let fixture: ComponentFixture<GaneshBundobustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaneshBundobustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaneshBundobustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
