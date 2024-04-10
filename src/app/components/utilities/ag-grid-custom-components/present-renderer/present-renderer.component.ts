import { Component } from '@angular/core';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-present-renderer',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './present-renderer.component.html',
  styleUrl: './present-renderer.component.scss',
})
export class PresentRendererComponent implements ICellRendererAngularComp {
  private params!: ICellRendererParams;
  private present!: boolean;
  protected presentIcon!: IconDefinition;
  protected readonly faCheck = faCheck;
  protected readonly faX = faX;

  agInit(params: any): void {
    this.params = params;
    this.setPresentIcon(params);
  }

  refresh(params: any): boolean {
    this.params = params;
    this.setPresentIcon(params);
    return true;
  }

  private setPresentIcon(params: ICellRendererParams) {
    this.present = params.value;
    this.presentIcon = this.present ? this.faCheck : this.faX;
  }
}
