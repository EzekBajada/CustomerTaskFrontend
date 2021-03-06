import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomersService } from '../services/customers-service';
import { Customer } from '../models/customers-model';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details-component.html',
  styleUrls: ['customer-details-component.css']
})
export class CustomerDetailsComponent implements OnInit
{
    @Input() imageSrc: any;
    @Input() hide: boolean;
    @Input() customerId: number;
    @Input() fullname: string;
    @Input() position: string;
    @Input() country: string;
    @Input() activity: string;
    @Output() triggerEdit = new EventEmitter<boolean>();

    constructor(private customerService: CustomersService) {
        this.imageSrc = './assets/images/main-pfp.ico';
        this.fullname = 'not defined yet';
        this.position = 'not defined yet';
        this.country = 'Malta';
        this.activity = 'Active';
    }

    ngOnInit() { }

    onClickTrashIcon()
    {
      this.customerService.DeleteCustomer(this.customerId)
      .subscribe(
        (data) => {
          location.reload();
        },
        (error) => {
        }
      );
    }

    onClickEditIcon()
    {
      this.triggerEdit.emit(true);
    }
}
