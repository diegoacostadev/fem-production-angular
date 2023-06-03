import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromWidgets from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';
import { Subject } from 'rxjs';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';

@Injectable()
export class WidgetsFacade {
  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  private mutations = new Subject();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private widgetsServive: WidgetsService) {}

  loadWidgets() {
    this.widgetsServive
      .all()
      .subscribe((widgets: Widget[]) => this.allWidgets.next(widgets));
  }

  selectWidget(widget: Widget) {
    this.selectedWidget.next(widget);
  }
}
