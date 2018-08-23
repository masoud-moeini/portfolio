import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  DataPassMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor() {
    this.DataPassMethod$ = this.myMethodSubject.asObservable();
  }

  DataPassMethod(data) {
    console.log(data);

    this.myMethodSubject.next(data);
  }
}
