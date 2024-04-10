import { inject, Injectable } from '@angular/core';
import {
  NzNotificationDataOptions,
  NzNotificationService,
} from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotiService {
  private nzNotificationService = inject(NzNotificationService);
  options: NzNotificationDataOptions = { nzPlacement: 'bottom' };

  success(message: string, title = 'Utility Action'): void {
    this.nzNotificationService.success(title, message, this.options);
  }

  error(message: string, title = 'Utility Action'): void {
    this.nzNotificationService.error(title, message, this.options);
  }
}
