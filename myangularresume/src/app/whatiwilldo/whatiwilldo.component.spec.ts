import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatiwilldoComponent } from './whatiwilldo.component';

describe('WhatiwilldoComponent', () => {
  let component: WhatiwilldoComponent;
  let fixture: ComponentFixture<WhatiwilldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatiwilldoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatiwilldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
