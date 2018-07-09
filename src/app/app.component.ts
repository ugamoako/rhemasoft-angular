import { Component,OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;
  ngOnInit(): void {
  
  }
  title = 'Rhemasoft';

  ngAfterViewInit() {
    
    const elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, '');
  }
}
