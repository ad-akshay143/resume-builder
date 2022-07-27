import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBuilderUiComponent } from './resume-builder-ui.component';

describe('ResumeBuilderUiComponent', () => {
  let component: ResumeBuilderUiComponent;
  let fixture: ComponentFixture<ResumeBuilderUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBuilderUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBuilderUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
