import { Component, OnInit } from '@angular/core';
declare var moment: any;

@Component({
  selector: 'app-demos-js',
  templateUrl: './demos-js.component.html',
  styleUrls: ['./demos-js.component.css']
})
export class DemosJsComponent {

    today: string = moment().format('D MMM YYYY');

}