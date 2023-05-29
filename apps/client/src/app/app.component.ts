import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from "@fem/core-data";
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets$: Observable<Widget[]>;
  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    console.log(this.widgets$);
   this.widgets$ = this.widgetsService.all();
    console.log(this.widgets$.subscribe(data => {
      console.log(data);
    }));
  }

  toggleSideNav() {
    console.log('toggle');
  }

  logout() {
    console.log('logout');
  }
}
