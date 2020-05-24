import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers-service'
import { Customer } from '../models/customers-model'
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details-component.html'
})
export class CustomerDetailsComponent implements OnInit
{
    hide : boolean = true;
    imageSrc: any
    fullname: string;
    position: string;
    country: string;
    activity: string;
    constructor() {
        this.imageSrc = './assets/images/apply_soap_hands_wash_clean_icon_143150 (1).ico'
        this.fullname = 'not defined yet'
        this.position = 'not defined yet'
        this.country = 'Malta'
        this.activity = 'Active'
    }
    ngOnInit() {

    }
}