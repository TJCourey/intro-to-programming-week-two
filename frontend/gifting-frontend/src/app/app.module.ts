import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { GiftGivingComponent } from './features/gift-giving/gift-giving.component';

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    NavigationComponent,
    DashboardComponent,
    GiftGivingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PersonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
