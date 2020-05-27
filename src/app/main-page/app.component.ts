import { Component, OnInit, Output, EventEmitter, ɵConsole } from '@angular/core';
import { CustomersService } from '../services/customers-service';
import { Customer } from '../models/customers-model';
import { InformationBadgeComponent } from '../information-badge/information-badge-component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app-component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
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
  countryId: string;
  activity: string;
  imageSrcDetails: SafeResourceUrl;
  imageName: string;
  /* To choose which component to choose
   0 - Add compoonent
   1 - View Details component
   2 - Edit Details component
  */
  detailsView = 0;
  constructor(private customerService: CustomersService, private domSanitizer: DomSanitizer) {}

  ngOnInit()
  {
    this.customerService.GetAllCustomers().subscribe(
      (data) => {
        data.forEach(element => {
          this.customerService.GetImageFromName(element.imageName).subscribe(
            (imageData) =>
            {
              const imageSrc = (this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(imageData)));
              element.imageName = imageSrc;
              this.imageSrcDetails = imageSrc;
            }
          );
          this.customers.push(element);
        });
      },
      (error) => {
      }
    );
    if (this.customers.length === 0)
    {
      this.customerService.AddSomeCustomers().subscribe(
        (data) => {
        },
        (error) => {
        }
      );
    }
  }

  OnbannerClicked($event)
  {
    this.detailsView = 0;
    this.hide = true;
    this.customerService.GetCustomer($event).subscribe(
      (data) =>
      {
        /* tslint:disable:no-string-literal */
        this.customerId = data['id'];
        this.fullName = data['fullName'];
        this.position = data['position'];
        switch (data['country'])
        {
            case 0: this.country = 'Malta'; break;
            case 1: this.country = 'England'; break;
            case 2: this.country = 'Italy'; break;
            case 3: this.country = 'Greece'; break;
        }
        this.countryId = data['country'].toString();
        if (data['activity']) {
          this.activity = 'Active';
        } else {
          this.activity = 'Not Active';
        }
        this.imageName = data['imageName'];
        this.customerService.GetImageFromName(data['imageName']).subscribe(
          (imageData) =>
          {
            const imageSrc = (this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(imageData)));
            this.imageSrcDetails = imageSrc;
          }
        );
        /* tslint:enable:no-string-literal */
      },
      (error) =>
      {

      }
    );
  }

  onPlusClick()
  {
    this.detailsView = 1;
  }

  onAddedSucces($event)
  {
    if ($event)
    {
      this.detailsView = 0;
    }
  }

  onTriggerEdit($event)
  {
    if ($event)
    {
      this.detailsView = 2;
    }
    console.log(this.fullName);
  }
}

