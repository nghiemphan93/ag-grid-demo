import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentEditorComponent } from './present-editor.component';

describe('PresentEditorComponent', () => {
  let component: PresentEditorComponent;
  let fixture: ComponentFixture<PresentEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
