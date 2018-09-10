import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {fadeAnimation} from '../../../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      const menu = $('ul.about__content__skills__skilList');
      $('ul.about__content__skills__skilList__skill__subSkills').hide();
      menu.on('click', function(event) {
        event.preventDefault();

        const targetParent = $(event.target).parent();
        console.log(targetParent);
        targetParent.toggleClass('active');
        targetParent.children('.about__content__skills__skilList__skill__subSkills').slideToggle(250);
      });
    });
  }

}
