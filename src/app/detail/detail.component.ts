import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _router: Router) { }
  name: string;
  date: string;
  observed:string;
  publics:string;
  ngOnInit() {
    const name = this._route.snapshot.paramMap.get('name');
    if (name) {
      this.name = name;
    }
    const date = this._route.snapshot.paramMap.get('date');
    if (date) {
      this.date = date;
    }
    const observed = this._route.snapshot.paramMap.get('observed');
    if (observed) {
      this.observed = observed;
    }
    const publics = this._route.snapshot.paramMap.get('public');
    if (publics) {
      this.publics = publics;
    }
  }
  onClick() {
    this._router.navigate(['']);
  }
}
