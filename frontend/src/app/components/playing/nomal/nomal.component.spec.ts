import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomalComponent } from './nomal.component';

describe('NomalComponent', () => {
  let component: NomalComponent;
  let fixture: ComponentFixture<NomalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
