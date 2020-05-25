import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomersService } from '../services/customers-service'
import { Customer } from '../models/customers-model'
import { InformationBadgeComponent } from '../information-badge/information-badge-component'
import { count } from 'rxjs/operators';
@Component({
  selector: 'add-customer',
  templateUrl: './add-customer-component.html'
})
export class AddCustomerComponent implements OnInit
{
  imageSrc: string;
  fullName: string;
  ID: number;
  @Output() statusOfAdd = new EventEmitter<boolean>();

  constructor(private customerService: CustomersService) {}
  ngOnInit()
  {
    this.imageSrc = './assets/images/Designcontest-Outline-Pencil.ico'
    this.fullName = ''
  }

  addCustomerDetails(fullname: any, position: any, country: any, activity: any)
  {
      let customer = new Customer(this.ID,fullname, position, country, activity)
      this.customerService.AddCustomer(customer).subscribe(
          (data) =>
          {
            this.statusOfAdd.emit(true);  
          },
          (error) => {
            this.statusOfAdd.emit(false);  
          }
      )
  }

  onClickTrashIcon(fullNameEvent: any,positionEvent: any, CountryEvent: any, ActivityEvent: any)
  {
    fullNameEvent.value = ' '
    positionEvent.value = ' '
    CountryEvent.value = ' '
    ActivityEvent.value = ' '
  }
}
