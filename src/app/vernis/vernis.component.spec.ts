import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VernisComponent } from './vernis.component';

describe('VernisComponent', () => {
  let component: VernisComponent;
  let fixture: ComponentFixture<VernisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VernisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VernisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
