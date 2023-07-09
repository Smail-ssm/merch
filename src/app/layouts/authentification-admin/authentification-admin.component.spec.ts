import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationAdminComponent } from './authentification-admin.component';

describe('AuthentificationAdminComponent', () => {
  let component: AuthentificationAdminComponent;
  let fixture: ComponentFixture<AuthentificationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentificationAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentificationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
