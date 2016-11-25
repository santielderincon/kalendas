/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemosJsComponent } from './demos-js.component';

describe('DemosJsComponent', () => {
  let component: DemosJsComponent;
  let fixture: ComponentFixture<DemosJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
