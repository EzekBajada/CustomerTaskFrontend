import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() ID: number;
  @Output() statusOfAdd = new EventEmitter<boolean>();

  constructor(private customerService: CustomersService) {}
  ngOnInit()
  {
    this.imageSrc = './assets/images/Designcontest-Outline-Pencil.ico'
    this.fullName = ''
  }

  addCustomerDetails(fullname: any, position: any, country: any, activity: any)
  {
      let countryId;
      switch(country.value)
      {
          case 'Malta': countryId = 0; break;
          case 'England': countryId = 1; break;
          case 'Italy': countryId = 2; break;
          case 'Greece': countryId = 3; break;
      }
      let activityBool;
      if(activity.value === 'active' || activity.value === 'Active'){
        activityBool = true
      }
      else if (activity.value === 'Not Active' || activity.value === 'not active') {
        activityBool = false
      }
      else {
        activityBool = null
      }
      let customer = new Customer(this.ID,fullname.value, position.value, countryId, activityBool)
      console.log(customer)
      this.customerService.AddCustomer(customer).subscribe(
          (data) =>
          {
            this.statusOfAdd.emit(true); 
            location.reload();
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
