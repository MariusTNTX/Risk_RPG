import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private readonly notifier: NotifierService;

    constructor(notifierService: NotifierService) { 
      this.notifier = notifierService;
    }

    showSuccess(message: string) {
        this.notifier.notify('success', message);
    }

    showError(message: string) {
        this.notifier.notify('error', message);
    }

    showWarning(message: string) {
        this.notifier.notify('warning', message);
    }

    showInfo(message: string) {
        this.notifier.notify('info', message);
    }
}