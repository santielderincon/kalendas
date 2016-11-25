import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Event } from './models/event';
import { EVENTS } from './models/mock-events';

@Injectable()
export class EventService {

    constructor(private http: Http) {}

    /*
    getEvents() {
        return this.http.get('showcase/resources/data/scheduleevents.json')
                    .toPromise()
                    .then(res => <any[]> res.json().data)
                    .then(data => { return data; });
    }
    */

    getEvents(): Promise<Event[]> {
        return Promise.resolve(EVENTS);
    }    
}
