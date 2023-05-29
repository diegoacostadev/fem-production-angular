import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fem-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() logout = new EventEmitter();
  @Output() toggleSideNav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
