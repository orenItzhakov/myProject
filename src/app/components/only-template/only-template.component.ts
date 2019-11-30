import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/name';

@Component({
  selector: 'app-only-template',
  template: `<h2 class="works">Works, my name is {{name}}</h2>`,
  styles: [
    `.works{
      font-size:40px;
      color:green;
    }`
  ]
})
export class OnlyTemplateComponent implements OnInit {
  name: string = 'oren1';
  names: string[] = ['oren2', 'beni'];
  user: IUser = {
    name: 'oren3',
    age: 45,
    id: 3456
  }
  arr: [string, number, boolean] = ['a', 3, true];
  constructor() { }

  ngOnInit() {
  }

}
