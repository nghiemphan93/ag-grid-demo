import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import {
  NzDropDownDirective,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { UtilitiesComponent } from './components/utilities/utilities.component';

// declare var NumericCellEditor: ICellEditorComp;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AgGridAngular,
    NzButtonComponent,
    NzSpinComponent,
    NzDropdownMenuComponent,
    NzDropDownDirective,
    NzIconDirective,
    NzMenuDirective,
    NzMenuItemComponent,
    UtilitiesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
