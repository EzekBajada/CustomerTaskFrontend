import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomersService } from '../services/customers-service'
import { Customer } from '../models/customers-model'
import { InformationBadgeComponent } from '../information-badge/information-badge-component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit
{
  customers: Customer[] = [];
  addedCustomers: boolean;
  hide: boolean;
  customerId: number;
  fullName: string;
  position: string;
  country: string;
  activity: string; 
  /* To choose which component to choose
   0 - Add compoonent
   1 - View Details component
   2 - Edit Details component
  */
  detailsView: number = 0;
  constructor(private customerService: CustomersService) {}
  
  ngOnInit()
  {
    console.log(this.customers.length)
    if(this.customers.length <= 0)
    {
      this.customerService.AddSomeCustomers()
    }

    this.customerService.GetAllCustomers().subscribe(
      (data) => {
        data.forEach(element => {
          this.customers.push(element)
          console.log(element)
        });
      },
      (error) =>
      {
      }
    )
  }

  OnbannerClicked($event)
  {
    this.detailsView = 0
    this.hide = true;
    this.customerService.GetCustomer($event).subscribe(
      (data) =>
      {
        this.fullName = data['fullName']
        this.position = data['position']
        switch(data['country'])
        {
            case 1: this.country = 'Malta'; break;
            case 2: this.country = 'England'; break;
            case 3: this.country = 'Italy'; break;
            case 4: this.country = 'Greece'; break;
        }
        if(data['activity']) { this.activity = 'Active'} else { this.activity = 'Not Active'} 
      },
      (error) =>
      {

      }
    )
  }

  onPlusClick()
  {
    this.detailsView = 1
  }

  onAddedSucces($event)
  { 
    console.log('add status:' + $event)
    if($event)
    {
      this.detailsView = 0
    }
  }
} 
