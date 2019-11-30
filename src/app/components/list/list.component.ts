import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IBeer } from 'src/app/interfaces/beers';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private _http: HttpService, private route: ActivatedRoute, private router: Router) { }
  fakeData: IBeer[];
  arrLen: number = 0;
  switchColor: string = 'gray';

  ngOnInit() {
    this._http.getFakeDateFromObservable().subscribe(data => {
      this.fakeData = data;
    });

    // from promise
    this._http.getFakeDateFromPromise().then(data => {
      console.log('Promise data: ', data);

    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.arrLen = id;
    });
  }

  giveMore() {
    this.router.navigate(['/list', this.arrLen + 1])
  }

  giveLess() {
    this.router.navigate(['/list', this.arrLen > 1 ? this.arrLen - 1 : 1])
  }
}
