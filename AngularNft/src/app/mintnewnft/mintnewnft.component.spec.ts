import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintnewnftComponent } from './mintnewnft.component';

describe('MintnewnftComponent', () => {
  let component: MintnewnftComponent;
  let fixture: ComponentFixture<MintnewnftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintnewnftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MintnewnftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
