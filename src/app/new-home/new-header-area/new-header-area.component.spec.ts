import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeaderAreaComponent } from './new-header-area.component';

describe('NewHeaderAreaComponent', () => {
  let component: NewHeaderAreaComponent;
  let fixture: ComponentFixture<NewHeaderAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHeaderAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeaderAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
