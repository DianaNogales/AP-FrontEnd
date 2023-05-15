import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaBlockComponent } from './experiencia-block.component';

describe('ExperienciaBlockComponent', () => {
  let component: ExperienciaBlockComponent;
  let fixture: ComponentFixture<ExperienciaBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
