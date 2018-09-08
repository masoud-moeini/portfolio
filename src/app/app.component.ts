import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    $(document).ready(function () {
      $('.drawerButton-img').click(function () {
        $('.app__nav').toggleClass('drawerEffect');
        $('.app__main').toggleClass('opacityEffect');
      });
      $('.navbar__menu__list__item').click(function () {
        $('.app__nav').toggleClass('drawerEffect');
        $('.app__main').toggleClass('opacityEffect');
      });
    });
  }

}
