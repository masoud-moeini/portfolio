import {Component, OnInit} from '@angular/core';
import {PageService} from '../page.service';
import { trigger, style, transition, animate, state } from '@angular/animations';
import {fadeAnimation} from '../animations';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    fadeAnimation
  ]

})
export class MainComponent implements OnInit {
  page_switch: string;

  constructor(private pageService: PageService) {
    this.pageService.DataPassMethod$.subscribe((data) => {
        this.page_switch = data;
      }
    );

  }
  ngOnInit() {

  }


}
