import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUtilityRendererComponent } from './delete-utility-renderer.component';

describe('DeleteUtilityRendererComponent', () => {
  let component: DeleteUtilityRendererComponent;
  let fixture: ComponentFixture<DeleteUtilityRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUtilityRendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteUtilityRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
