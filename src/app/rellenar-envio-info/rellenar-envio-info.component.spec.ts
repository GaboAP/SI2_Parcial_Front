import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RellenarEnvioInfoComponent } from './rellenar-envio-info.component';

describe('RellenarEnvioInfoComponent', () => {
  let component: RellenarEnvioInfoComponent;
  let fixture: ComponentFixture<RellenarEnvioInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RellenarEnvioInfoComponent]
    });
    fixture = TestBed.createComponent(RellenarEnvioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
