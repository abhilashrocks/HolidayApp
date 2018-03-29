import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Holiday } from '../data.model';
import { DataService } from '../data.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  fullData: Holiday[] = [];
  constructor(private service: DataService,private router:Router) { }

  ngOnInit() {
    this.getHolidayData();
  }
  getHolidayData() {
    var res = [];
    let id = 1;
    this.service.getHolidayData().subscribe(data => {
      this.data = data['holidays'];
      for (var x in data['holidays']) {
        res.push(data['holidays'][x])
      }
      let id=1;
      res.forEach((v) => {
        v.forEach((i) => {
          this.fullData.push(i);
        })
      })
    })
  }
}
