import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftscollectionComponent } from './nftscollection.component';

describe('NftscollectionComponent', () => {
  let component: NftscollectionComponent;
  let fixture: ComponentFixture<NftscollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftscollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftscollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
