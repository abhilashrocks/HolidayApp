import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Holiday } from './data.model';

@Injectable()

export class DataService{
    constructor(private http:HttpClient){}
    getHolidayData(){
        return this.http.get("https://holidayapi.com/v1/holidays?key=bcb6496f-0315-4583-b14f-1e175bf1fd70&country=US&year=2015")
    }
}