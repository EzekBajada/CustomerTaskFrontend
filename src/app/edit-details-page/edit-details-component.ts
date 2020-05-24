import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomersService } from '../services/customers-service'
import { Customer } from '../models/customers-model'
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'edit-details',
  templateUrl: './edit-details-component.html'
})
export class EditDetailsComponent implements OnInit
{
    constructor(private customerService: CustomersService) { }

    imageSrc: any
    ID: number;
    fullname: string;
    position: string;
    country: string;
    activity: string;

    @Output() statusOfEdit = new EventEmitter<boolean>();
    ngOnInit() { 
        this.imageSrc = './assets/images/apply_soap_hands_wash_clean_icon_143150 (1).ico'
        this.fullname = 'not defined yet'
        this.position = 'not defined yet'
        this.country = 'Malta'
        this.activity = 'Active'
    }

    editCustomerDetails(fullname: string, position: string, country: string, activity: boolean)
    {
        let countryId;
        switch(country)
        {
            case 'Malta': countryId = 0; break;
            case 'England': countryId = 1; break;
            case 'Italy': countryId = 2; break;
            case 'Greece': countryId = 3; break;
        }
        let customer = new Customer (this.ID, fullname, position, countryId, activity);
        this.customerService.EditCustomer(customer).subscribe(
            (data) =>
            {
                this.statusOfEdit.emit(true);
            },
            (error) => 
            {
                this.statusOfEdit.emit(false);
            }
        )
    }
}