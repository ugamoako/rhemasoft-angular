import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
public firstDigit = 4;
public secondDigit = 0;
public thirdDigit = 4;
  constructor() { }

  ngOnInit() {}
  

}
