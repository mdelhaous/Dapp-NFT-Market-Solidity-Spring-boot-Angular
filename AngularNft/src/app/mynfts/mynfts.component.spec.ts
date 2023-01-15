import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynftsComponent } from './mynfts.component';

describe('MynftsComponent', () => {
  let component: MynftsComponent;
  let fixture: ComponentFixture<MynftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MynftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MynftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
