import { Component, OnInit } from '@angular/core';
import { ScheduleModule, GalleriaModule } from 'primeng/primeng';

import { Event } from './../models/event';
import { EventService } from './../event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: Event[];
  images: any[];

  constructor(private eventService: EventService) { }

  getEvents(): void {
    this.eventService.getEvents().then(events => this.events = events);
  }

  ngOnInit(): void {

      this.getEvents();

      this.images = [];
      this.images.push({source:'assets/img/cartel-01.jpg', alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:'assets/img/cartel-02.jpg', alt:'Description for Image 2', title:'Title 2'});
      this.images.push({source:'assets/img/cartel-03.png', alt:'Description for Image 3', title:'Title 3'});
      this.images.push({source:'assets/img/cartel-04.jpg', alt:'Description for Image 4', title:'Title 4'});
      this.images.push({source:'assets/img/cartel-05.jpg', alt:'Description for Image 5', title:'Title 5'});
      this.images.push({source:'assets/img/cartel-06.jpg', alt:'Description for Image 6', title:'Title 6'});
      this.images.push({source:'assets/img/cartel-07.png', alt:'Description for Image 7', title:'Title 7'});
      this.images.push({source:'assets/img/cartel-08.jpg', alt:'Description for Image 8', title:'Title 8'});
    }
    
}
