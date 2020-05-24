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
  ngOnInit(){}
}