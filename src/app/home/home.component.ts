import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";
import {AfterViewInit} from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
    
      //var elems = document.querySelector('.carousel');
      //var instances = M.carousel.init(elems);
  
  }
  ngAfterViewInit() {
    const elem = document.querySelectorAll('.carousel');
    M.Carousel.init(elem, '');
    
  }

  

}
