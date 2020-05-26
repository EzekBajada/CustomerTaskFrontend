import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CustomersService } from '../services/customers-service'
import { Customer } from '../models/customers-model'
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'edit-details',
  templateUrl: './edit-details-component.html'
})
export class EditDetailsComponent implements OnInit
{
    constructor(private customerService: CustomersService) { 
      this.imageSrc = './assets/images/main-pfp.ico'

    }

    @Input() imageSrc: any
    @Input() customerId: number;
    @Input() fullname: string;
    @Input() position: string;
    @Input() country: string;
    @Input() activity: string;
    @Output() statusOfEdit = new EventEmitter<boolean>();
    @Output() statusOfDelete = new EventEmitter<boolean>();
    imageFileSelected: File;
    ngOnInit() { 
    }

    editCustomerDetails(fullname: any, position: any, country: any, activity: any)
    {
        console.log(fullname.value, position.value, country.value, activity.value)
        let countryId;
        switch(country.value)
        {
            case 'Malta': countryId = 0; break;
            case 'England': countryId = 1; break;
            case 'Italy': countryId = 2; break;
            case 'Greece': countryId = 3; break;
        }
        let acitivityBool;
        if(activity.value === 'active' || activity.value === 'Active')
        {
          acitivityBool = true;
        }
        else if(activity.value === 'not active' || activity.value === 'Not Active')
        {
          acitivityBool = false;
        }
        else {
          acitivityBool = null
        }
        let customer = new Customer (this.customerId, fullname.value, position.value, countryId, acitivityBool, this.imageFileSelected.name);
        this.customerService.EditCustomer(customer).subscribe(
            (data) => 
            {
              this.statusOfEdit.emit(true);
              location.reload();
            },
            (error) => 
            {
                this.statusOfEdit.emit(false);
            }
        )
        this.customerService.UploadImage(this.imageFileSelected).subscribe(
          (data) => {
          }
        ) 
    }

  onClickTrashIcon()
  {
    this.customerService.DeleteCustomer(this.customerId)
    .subscribe(
      (data) => {
        this.statusOfEdit.emit(true);
        location.reload();
      },
      (error) => {
        this.statusOfEdit.emit(false);
      }
      );
  }

  OnFileSelect($event)
  {
    if($event.target.files[0].type === 'image/x-icon')
    {
     
      this.imageFileSelected = $event.target.files[0]
    }
  }
}