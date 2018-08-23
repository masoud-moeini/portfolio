import {Component, OnInit} from '@angular/core';
import {PageService} from "../page.service";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private page_switch:string;

  constructor(private pageService:PageService) {
    this.pageService.DataPassMethod$.subscribe((data) => {
        this.page_switch = data;
      }
    );

  }

  ngOnInit() {

  }


}
