import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() pather: string;
  @Output() childEvent = new EventEmitter();
  childText: string = "";
  childTextForViewChild: string = "child text";
  constructor() { }

  ngOnInit() {
  }

  sendToFather() {
    this.childEvent.emit(this.childText);
  }
}
