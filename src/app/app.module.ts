import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './main-page/app.component';
import { InformationBadgeComponent } from './information-badge/information-badge-component';
import { CustomerDetailsComponent } from './customer-details-page/customer-details-component' ;
import { EditDetailsComponent } from './edit-details-page/edit-details-component';
import { AddCustomerComponent } from './add-customer-page/add-customer-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    InformationBadgeComponent,
    CustomerDetailsComponent,
    EditDetailsComponent,
    AddCustomerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
