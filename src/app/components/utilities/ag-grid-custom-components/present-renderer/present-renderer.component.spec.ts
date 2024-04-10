import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentRendererComponent } from './present-renderer.component';

describe('PresentRendererComponent', () => {
  let component: PresentRendererComponent;
  let fixture: ComponentFixture<PresentRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentRendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
