import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './customer-page/app.component';
import { InformationBadgeComponent } from './information-badge/information-badge-component' 
import { CustomerDetailsComponent } from './customer-details-page/customer-details-component' 

@NgModule({
  declarations: [
    AppComponent,
    InformationBadgeComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
