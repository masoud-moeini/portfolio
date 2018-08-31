import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myRecaptcha = new FormControl(false);
  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      $(".contact__content__contactForm__form__inputText__field").blur( function() {
        var tmp = $(this).val();
        if(tmp == '') {
          $(this).next("label").removeClass("visuallyHidden");
          console.log("has not value")
        } else {

          $(this).next("label").addClass("visuallyHidden");
          console.log("has value")
        }
      });

    })


  }


  log(x){
    console.log(x)
  }

  onScriptLoad() {
    console.log('Google reCAPTCHA loaded and is ready for use!')
  }

  onScriptError() {
    console.log('Something went long when loading the Google reCAPTCHA')
  }

}
