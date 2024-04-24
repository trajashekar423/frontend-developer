import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepgeComponent } from './homepge.component';

describe('HomepgeComponent', () => {
  let component: HomepgeComponent;
  let fixture: ComponentFixture<HomepgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
