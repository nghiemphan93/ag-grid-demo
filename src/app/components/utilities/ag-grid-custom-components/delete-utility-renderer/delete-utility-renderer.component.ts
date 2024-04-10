import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from 'ag-grid-community';
import { UtilityActions } from '../../state/utlity.actions';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { firstValueFrom } from 'rxjs';
import { Utility } from '../../models/utility';

@Component({
  selector: 'app-delete-utility-renderer',
  standalone: true,
  imports: [NzButtonComponent],
  templateUrl: './delete-utility-renderer.component.html',
  styleUrl: './delete-utility-renderer.component.scss',
})
export class DeleteUtilityRendererComponent
  implements ICellRendererAngularComp
{
  private params: any;
  private store: Store = inject(Store);

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {}

  async onClick(event: any) {
    this.params.api.showLoadingOverlay();
    const utility = this.params.data as Utility;
    await firstValueFrom(
      this.store.dispatch(new UtilityActions.DeleteUtility(utility)),
    );
    this.params.api.hideOverlay();
  }
}
