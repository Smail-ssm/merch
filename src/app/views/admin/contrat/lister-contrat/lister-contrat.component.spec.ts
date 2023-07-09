import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerContratComponent } from './lister-contrat.component';

describe('ListerContratComponent', () => {
  let component: ListerContratComponent;
  let fixture: ComponentFixture<ListerContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerContratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
