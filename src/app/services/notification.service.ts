import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(title, message){
      this.toastr.success(message, title);
  }

  showError(title, message){
      this.toastr.error(message, title);
  }

  showInfo(title, message){
      this.toastr.info(message, title);
  }

  showWarning(title, message){
      this.toastr.warning(message, title);
  }
}
