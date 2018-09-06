import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
        $('.portfolio__content__items__item-container').hover(function () {
            $(this).children('.portfolio__content__items__item-container-button').animate({opacity: '1'});
        }, function () {
          $(this).children('.portfolio__content__items__item-container-button').animate({opacity: '0'});
        });
    });
  }
}
