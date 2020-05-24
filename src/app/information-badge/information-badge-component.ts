import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers-service'
import { Customer } from '../models/customers-model'
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'information-badge',
  templateUrl: './information-badge-component.html'
})
export class InformationBadgeComponent implements OnInit
{
  constructor(private customerService: CustomersService) {}

  imageSrc: any;
  customerID : number;
  fullname: string;
  position: string;
  hide: boolean = true;
  
  ngOnInit(){
    this.imageSrc = 'assets/images/apply_soap_hands_wash_clean_icon_143150 (1).ico'
    this.fullname = 'not yet defined'
    this.position = 'not yet defined'
    console.log(this.hide)
  }

  onClickIcon()
  {
    this.customerService.DeleteCustomer(this.customerID)
    .subscribe(
      (data) => {
        this.hide = false;
      },
      (error) => {
        this.hide = true;
        console.log('was not deleted')
      }
      );
  }
}