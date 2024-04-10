import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ICellEditorParams } from 'ag-grid-community';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzFormDirective } from 'ng-zorro-antd/form';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-present-editor',
  standalone: true,
  imports: [
    FaIconComponent,
    FormsModule,
    ReactiveFormsModule,
    NzFormDirective,
    NzSelectComponent,
    NzOptionComponent,
    NzIconDirective,
  ],
  templateUrl: './present-editor.component.html',
  styleUrl: './present-editor.component.scss',
})
export class PresentEditorComponent
  implements ICellEditorAngularComp, AfterViewInit, OnInit
{
  private params!: ICellEditorParams;
  protected present!: boolean;
  private presentIcon!: IconDefinition;
  protected readonly faCheck = faCheck;
  protected readonly faX = faX;
  @ViewChild('container', { read: ViewContainerRef })
  public container!: ViewContainerRef;

  fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    selectedOption: [null], // Default value
  });

  ngOnInit(): void {
    this.form.get('selectedOption')?.valueChanges.subscribe((value) => {
      this.present = value;
      this.presentIcon = this.present ? this.faCheck : this.faX;
      console.log('value change', value);
    });
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.container.element.nativeElement.focus();
    });
  }

  agInit(params: any): void {
    this.params = params;
    console.log('vao day ko');
    console.log(this.params);
    this.form.get('selectedOption')?.setValue(params.value);
    this.setPresentIcon(params);
  }

  getValue(): any {
    console.log('duwocj goi ko');
    console.log(this.form.get('selectedOption')?.value);
    return this.form.get('selectedOption')?.value;
  }

  isPopup(): boolean {
    return false;
  }

  onClick(b: boolean) {
    this.present = b;
    this.presentIcon = b ? this.faCheck : this.faX;
    this.params.api.stopEditing();
  }

  private setPresentIcon(params: ICellEditorParams) {
    this.present = params.value;
    this.presentIcon = this.present ? this.faCheck : this.faX;
  }

  // afterGuiAttached(): void {
  //   this.params.api.stopEditing();
  // }
}
