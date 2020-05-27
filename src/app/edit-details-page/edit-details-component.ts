import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CustomersService } from '../services/customers-service';
import { Customer } from '../models/customers-model';
import { Observable, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details-component.html',
  styleUrls: ['edit-details-component.css']
})
export class EditDetailsComponent implements OnInit
{
    constructor(private customerService: CustomersService, private notifyService: NotificationService) {
      this.imageSrc = './assets/images/main-pfp.ico';

    }

    @Input() imageSrc: any;
    @Input() imageName: string;
    @Input() customerId: number;
    @Input() fullname: string;
    @Input() position: string;
    @Input() country: string;
    @Input() activity: string;

    imageFileSelected: File;
    ngOnInit() { }

    editCustomerDetails(fullname: any, position: any, country: any, activity: any)
    {
        if (fullname.value === '')
        {
          this.notifyService.showError('Invalid FullName!', 'FullName cannot be left empty');
        }
        if (position.value === '')
        {
          this.notifyService.showError('Invalid Position!', 'Position cannot be left empty');
        }
        let acitivityBool;
        if (activity.value === 'Active')
        {
          acitivityBool = true;
        }
        else if (activity.value === 'Not Active')
        {
          acitivityBool = false;
        }
        let filename;
        if (this.imageFileSelected)
        {
          filename = this.imageFileSelected.name;
        }
        else if (this.imageName)
        {
          filename = this.imageName;
        }
        else
        {
          filename = '';
        }
        const customer = new Customer (this.customerId, fullname.value, position.value, +country.value, acitivityBool, filename);
        this.customerService.EditCustomer(customer).subscribe(
            (data) =>
            {
              location.reload();
            },
            (error) =>
            {
            }
        );
        this.customerService.UploadImage(this.imageFileSelected).subscribe(
          (data) => {
          }
        );
    }

  onClickTrashIcon()
  {
    this.customerService.DeleteCustomer(this.customerId)
    .subscribe(
      (data) => {
        this.notifyService.showSuccess('Customer Deleted', ' ');
        location.reload();
      },
      (error) => {
        this.notifyService.showError('Server Failed', ' ');
      }
    );
  }

  OnFileSelect($event)
  {
    if ($event.target.files[0].type === 'image/x-icon')
    {
      this.imageFileSelected = $event.target.files[0];
      this.notifyService.showInfo('Image Uploaded', '');
    }
    else{
      this.notifyService.showError('Invalid File Format', 'Avatar must be of .ico extension');
    }
  }
}
