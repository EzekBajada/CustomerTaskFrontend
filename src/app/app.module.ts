import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './customer-page/app.component';
import { InformationBadgeComponent } from './information-badge/information-badge-component' 

@NgModule({
  declarations: [
    AppComponent,
    InformationBadgeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
