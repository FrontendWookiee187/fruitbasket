import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitslistComponent } from './fruitslist.component';

describe('FruitslistComponent', () => {
  let component: FruitslistComponent;
  let fixture: ComponentFixture<FruitslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
