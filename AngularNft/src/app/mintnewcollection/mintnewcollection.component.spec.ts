import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintnewcollectionComponent } from './mintnewcollection.component';

describe('MintnewcollectionComponent', () => {
  let component: MintnewcollectionComponent;
  let fixture: ComponentFixture<MintnewcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintnewcollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MintnewcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
