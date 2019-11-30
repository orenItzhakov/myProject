import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild(ChildComponent, { static: false }) child;

  textFromViewChild: string;
  textFromViewService: string;
  clickNumber: number = 0;
  isOK: boolean = false;
  patherText: string = "";
  childText: string = "";
  name: string = '';
  someDate: Date = new Date(1993, 7, 22);
  myImgUrl: string = 'https://il.bee.deals/static/img/navbrand.png';
  constructor(private httpService: HttpService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.textFromViewChild = this.child.childTextForViewChild;
    });
  }

  ngOnInit() {
    this.httpService.currMessage.subscribe((message)=>{
      this.textFromViewService = message;
    });
  }

  getClasses() {
    return {
      long: this.name.length > 5,
      small: this.name.length <= 5
    }
  }

  setChild(e) {
    this.childText = e;
  }
}
