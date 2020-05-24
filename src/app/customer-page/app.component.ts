import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers-service'
import { Customer } from '../models/customers-model'
import { InformationBadgeComponent } from '../information-badge/information-badge-component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit
{
  constructor(private customerService: CustomersService) {}
  
  ngOnInit()
  {
    
  }

  getCustomers() : Customer
  {
    return this.customerService
      .GetCustomer(2)
      .subscribe(
        (data) => 
        {
          console.log(data)
        }, 
        (error) => 
        { 
          console.log(error.error)
        });
  }

  addCustomer(customer: Customer)
  {
    return this.customerService
      .AddCustomer(customer)
      .subscribe(
        (data) => 
        {
          console.log(data)
        },
        (error) =>
        {
          console.log(error.error)
        }
      )
  }

  editCustomer(customer: Customer) : any
  {
    return this.customerService
      .EditCustomer(customer)
      .subscribe(
        (data) => 
        {
          console.log(data)
        },
        (error) =>
        {
          console.log(error.error)
        }
      )
  }

  deleteCustomer(id: number)
  {
    return this.customerService
      .DeleteCustomer(id)
      .subscribe(
        (data) => 
        {
          console.log(data)
        },
        (error) =>
        {
          console.log(error.error)
        }
      )
  }
} 
