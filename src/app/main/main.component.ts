import {Component, OnInit} from '@angular/core';
import {PageService} from "../page.service";
import { trigger,style,transition,animate,state } from '@angular/animations';
import {fadeAnimation} from "../animations";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations:[
    fadeAnimation
  ]

})
export class MainComponent implements OnInit {
  private page_switch:string;

  // todo for animations : https://stackoverflow.com/questions/42016130/is-it-possible-to-animate-angular-2s-ng-switch
  // todo for animations : Mosh tutorial
  // todo or with css animate ?

  constructor(private pageService:PageService) {
    this.pageService.DataPassMethod$.subscribe((data) => {
        this.page_switch = data;
      }
    );

  }

  ngOnInit() {

  }


}
