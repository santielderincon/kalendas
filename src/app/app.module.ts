import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InputTextModule, OrderListModule, GalleriaModule, ScheduleModule } from 'primeng/primeng';

import * as moment from 'moment';

import { AppComponent } from './app.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';
import { DemosJsComponent } from './demos-js/demos-js.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventService } from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    PrimeNgComponent,
    DemosJsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule, // PrimeNG
    OrderListModule, // this line brings the magic of p-dataList to your markup!
    GalleriaModule,
    ScheduleModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
