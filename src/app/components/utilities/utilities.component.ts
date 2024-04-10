import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import {
  NzDropDownDirective,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  RowEditingStartedEvent,
  RowEditingStoppedEvent,
  RowValueChangedEvent,
} from 'ag-grid-community';
import { Store } from '@ngxs/store';
import {
  DeficienciesE,
  PartialFullNoneE,
  Utility,
  UtilityCategoryE,
} from './models/utility';
import { firstValueFrom, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { UtilitySelectors } from './state/utility.selectors';
import { UtilityActions } from './state/utlity.actions';
import { NotiService } from './services/noti.service';
import {
  FaIconComponent,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { PresentRendererComponent } from './ag-grid-custom-components/present-renderer/present-renderer.component';
import { DeleteUtilityRendererComponent } from './ag-grid-custom-components/delete-utility-renderer/delete-utility-renderer.component';
import UpdateUtility = UtilityActions.UpdateUtility;

@Component({
  selector: 'app-utilities',
  standalone: true,
  imports: [
    AgGridAngular,
    NzButtonComponent,
    NzDropDownDirective,
    NzDropdownMenuComponent,
    NzIconDirective,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSpinComponent,
    AsyncPipe,
    FaIconComponent,
    FontAwesomeModule,
  ],
  templateUrl: './utilities.component.html',
  styleUrl: './utilities.component.scss',
})
export class UtilitiesComponent {
  private notiService = inject(NotiService);
  private store: Store = inject(Store);
  public utilities: Observable<Utility[]> = this.store.select(
    UtilitySelectors.getUtilities(),
  );
  public overlayLoadingTemplate =
    '<div aria-live="polite" aria-atomic="true" style="position:absolute;top:0;left:0;right:0; bottom:0; background: url(https://ag-grid.com/images/ag-grid-loading-spinner.svg) center no-repeat" aria-label="loading"></div>';
  private gridApi!: GridApi<Utility[]>;
  public columnDefs: ColDef[] = [
    {
      field: 'category',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: Object.values(UtilityCategoryE) as UtilityCategoryE[],
      },
      minWidth: 210,
      filter: true,
    },
    {
      field: 'present',
      cellRenderer: PresentRendererComponent,
      cellEditor: 'agSelectCellEditor',
      // cellEditorPopup: false,
      editable: true,
      cellEditorParams: {
        values: [true, false],
      },
    },
    {
      field: 'fireSeparation',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: Object.values(PartialFullNoneE) as PartialFullNoneE[],
      },
      headerName: 'Read Only',
      editable: false,
    },
    {
      field: 'fireDetection',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: Object.values(PartialFullNoneE) as PartialFullNoneE[],
      },
    },
    {
      field: 'fixedProtection',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: Object.values(PartialFullNoneE) as PartialFullNoneE[],
      },
    },
    {
      field: 'deficiencies',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: Object.values(DeficienciesE) as DeficienciesE[],
      },
    },
    {
      field: 'numberField',
      cellEditor: 'agNumberCellEditor',
      valueFormatter: (params) =>
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(params.value),
    },
    {
      headerName: 'Twice Number Field',
      headerTooltip: 'Twice Number Field',
      field: 'twiceNumberField',
      valueGetter: (params) => params.data.numberField * 2,
      valueFormatter: (params) =>
        new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(params.value),
      editable: false,
      sortable: true,
      filter: true,
    },
    {
      field: 'textField',
      cellEditor: 'agLargeTextCellEditor',
      // cellEditor: 'agTextCellEditor',
      // cellEditorPopup: true,
      // cellEditor: 'agTextCellEditor',
      resizable: true,
      wrapText: true,
      autoHeight: true,
      minWidth: 150,
      cellEditorParams: {
        rows: 5,
        cols: 30,
      },
      cellEditorPopup: true,
      cellEditorPopupPosition: 'under',
    },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: DeleteUtilityRendererComponent,
      minWidth: 150,
      editable: false,
      sortable: false,
      filter: false,
    },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
    cellDataType: false,
  };
  public editType: 'fullRow' = 'fullRow';

  async onRowValueChanged(event: RowValueChangedEvent) {
    this.gridApi.showLoadingOverlay();
    let data = event.data as Utility;
    console.log(event);
    try {
      await firstValueFrom(this.store.dispatch(new UpdateUtility(data)));
      this.notiService.success(`Update utility ${data.id} successfully!`);
    } catch (e) {
      this.notiService.error(`Some error happened: ${e}`);
      this.store.dispatch(new UtilityActions.GetUtilities());
    } finally {
      this.gridApi.hideOverlay();
    }
  }

  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;
  }

  onRowEditingStop(event: RowEditingStoppedEvent<any>) {
    console.log('on row editing stop');
  }

  onRowEditingStarted($event: RowEditingStartedEvent<any>) {
    console.log('on row editing started');
  }

  protected readonly faCheck = faCheck;
  protected readonly faX = faX;
}
