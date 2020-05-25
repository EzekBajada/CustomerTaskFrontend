import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customers-model'
import { environment } from '../environments/environment'
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CustomersService 
{
    constructor(private httpClient: HttpClient) { };
    
    // GET Customer information
    GetCustomer(customerId : number): Observable<Customer>{
        const url = environment.apiURL + '/GetCustomer/' + customerId;
        return this.httpClient.get(url)
    }

    // ADD a new customer
    AddCustomer(customer: Customer): Observable<Customer>
    {
        const url = environment.apiURL + '/Addcustomer'
        return this.httpClient.post(url, customer)
    }

    // EDIT an existing customer
    EditCustomer(customer: Customer): Observable<Customer>
    {
        const url = environment.apiURL + '/EditCustomers'
        return this.httpClient.post(url, customer)
    }

    // DELETE an existing customer
    DeleteCustomer(id: number) : Observable<Customer>
    {
        const url = environment.apiURL + '/DeleteCustomers/' + id
        return this.httpClient.get(url)
    }

    // ADD some dummy data
    AddSomeCustomers() : Observable<Customer>
    {
        const url = environment.apiURL + '/AddSomecustomers'
        return this.httpClient.get(url)
    }

    // GET all customers
    GetAllCustomers() : any
    {
        const url = environment.apiURL + '/Allcustomers'
        return this.httpClient.get(url)
    }
}
