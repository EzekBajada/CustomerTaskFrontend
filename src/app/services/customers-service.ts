import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customers-model';
import { environment } from '../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { CustomerDTO } from '../models/customer-DTO';
import { IfStmt } from '@angular/compiler';

@Injectable({
    providedIn: 'root',
})
export class CustomersService
{
    constructor(private httpClient: HttpClient) { }

    // GET Customer information
    GetCustomer(customerId: number): Observable<CustomerDTO>{
        const url = environment.apiURL + '/GetCustomer/' + customerId;
        return this.httpClient.get(url);
    }

    // ADD a new customer
    AddCustomer(customer: Customer): Observable<CustomerDTO>
    {
        const url = environment.apiURL + '/Addcustomer';
        return this.httpClient.post(url, customer);
    }

    // EDIT an existing customer
    EditCustomer(customer: Customer): Observable<CustomerDTO>
    {
        const url = environment.apiURL + '/EditCustomers';
        return this.httpClient.post(url, customer);
    }

    // DELETE an existing customer
    DeleteCustomer(id: number): Observable<CustomerDTO>
    {
        const url = environment.apiURL + '/DeleteCustomers/' + id;
        return this.httpClient.get(url);
    }

    // ADD some dummy data
    AddSomeCustomers(): Observable<CustomerDTO>
    {
        const url = environment.apiURL + '/AddSomecustomers';
        return this.httpClient.get(url);
    }

    // GET all customers
    GetAllCustomers(): any
    {
        const url = environment.apiURL + '/Allcustomers';
        return this.httpClient.get(url);
    }

    GetImageFromName(fileName: string)
    {
        const url = environment.apiURL + '/GetFile/' + fileName;
        return this.httpClient.get(url, {responseType: 'blob'});
    }

    UploadImage(eventFileChange: File)
    {
        const formData = new FormData();
        if (eventFileChange)
        {
           formData.append('file', eventFileChange, eventFileChange.name);
        }
        const url = environment.apiURL + '/UploadFile';
        return this.httpClient.post(url, formData);
    }
}
