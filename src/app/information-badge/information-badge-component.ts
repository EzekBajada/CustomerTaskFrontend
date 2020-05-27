import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomersService } from '../services/customers-service';
import { Customer } from '../models/customers-model';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-information-badge',
  templateUrl: './information-badge-component.html',
  styleUrls: ['information-badge-component.css']
})
export class InformationBadgeComponent implements OnInit
{
  constructor(private customerService: CustomersService) {}

  imageSrc: any;
  @Input() customerID: number;
  @Input() customers: Customer[] = [];
  @Output() bannerClicked = new EventEmitter<number>();

  ngOnInit(){
    this.imageSrc = 'assets/images/apply_soap_hands_wash_clean_icon_143150 (1).ico';
  }

  onClickIcon(customerID: number)
  {
    this.customerService.DeleteCustomer(customerID)
    .subscribe(
      (data) => {
        location.reload();
      },
      (error) => {
      }
      );
  }

  OnbannerClicked(customerId: number)
  {
    this.bannerClicked.emit(customerId);
  }
}
