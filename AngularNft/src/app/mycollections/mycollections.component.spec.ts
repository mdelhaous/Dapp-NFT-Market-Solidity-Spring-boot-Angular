import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycollectionsComponent } from './mycollections.component';

describe('MycollectionsComponent', () => {
  let component: MycollectionsComponent;
  let fixture: ComponentFixture<MycollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
