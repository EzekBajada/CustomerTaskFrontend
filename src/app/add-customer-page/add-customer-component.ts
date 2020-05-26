import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CustomersService } from '../services/customers-service';
import { Customer } from '../models/customers-model';
import { InformationBadgeComponent } from '../information-badge/information-badge-component';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer-component.html'
})
export class AddCustomerComponent implements OnInit
{
  imageSrc: string;
  fullName: string;
  fileSelected: File;

  @Input() customerId: number;

  constructor(private customerService: CustomersService, private notifyService: NotificationService) {
    this.imageSrc = './assets/images/pencil.ico';
    this.fullName = '';
  }

  ngOnInit() { }

  addCustomerDetails(fullname: any, position: any, country: any, activity: any)
  {
      if (fullname.value === '')
      {
        this.notifyService.showError('Invalid FullName!', 'FullName cannot be left empty');
      }

      if (position.value === '')
      {
        this.notifyService.showError('Invalid Position!', 'Position cannot be left empty');
      }

      let filename;
      if (!this.fileSelected)
      {
        this.notifyService.showError('No Avatar', 'an avatar must be set');
        filename = '';
      } else {
        filename = this.fileSelected.name;
      }

      let activityBool;
      if (activity.value === 'active')
      {
        activityBool = true;
      } else if (activity.value === 'not-active') {
        activityBool = false;
      }

      const customer = new Customer(this.customerId, fullname.value, position.value, +country.value, activityBool, filename);
      this.customerService.AddCustomer(customer).subscribe(
          (data) => {
            this.notifyService.showSuccess('Customer Added!', '');
            location.reload();
          },
          (error) => {
            this.notifyService.showError('Server Failed!', 'Try Again');
          });

      this.customerService.UploadImage(this.fileSelected).subscribe(
          (data) => { }
      );
  }

  onClickTrashIcon(fullNameEvent: any, positionEvent: any, CountryEvent: any, ActivityEvent: any)
  {
    fullNameEvent.value = ' ';
    positionEvent.value = ' ';
    CountryEvent.value = ' ';
    ActivityEvent.value = ' ';
  }

  OnFileSelect($event){
    if ($event.target.files[0].type === 'image/x-icon') {
      this.fileSelected = $event.target.files[0];
      this.notifyService.showInfo('Image Uploaded', '');
    }
    else
    {
      this.notifyService.showError('Invalid File Format', 'Avatar must be of .ico extension');
    }
  }
}
