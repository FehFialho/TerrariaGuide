import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossesPageComponent } from './bosses-page.component';

describe('BossesPageComponent', () => {
  let component: BossesPageComponent;
  let fixture: ComponentFixture<BossesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BossesPageComponent]
    });
    fixture = TestBed.createComponent(BossesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
