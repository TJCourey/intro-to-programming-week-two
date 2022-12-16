import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PeopleEntryComponent } from './features/gift-giving/components/people-entry/people-entry.component';
import { PeopleListComponent } from './features/gift-giving/components/people-list/people-list.component';
import { GiftGivingComponent } from './features/gift-giving/gift-giving.component';
import { PersonDataService } from './services/people-data.service';
import { reducers } from './state';
import { PeopleEffects } from './state/effects/people-effects';

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    NavigationComponent,
    DashboardComponent,
    GiftGivingComponent,
    AboutUsComponent,
    PeopleListComponent,
    PeopleEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PeopleEffects]),
  ],
  providers: [PersonDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
