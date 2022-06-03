import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanobeComponent } from './ranobe.component';

describe('RanobeComponent', () => {
  let component: RanobeComponent;
  let fixture: ComponentFixture<RanobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RanobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
