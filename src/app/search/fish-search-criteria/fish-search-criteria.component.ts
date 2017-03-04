import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fish-search-criteria',
  templateUrl: './fish-search-criteria.component.html',
  styleUrls: ['./fish-search-criteria.component.css']
})
export class FishSearchCriteriaComponent implements OnInit {

  val: number;

  constructor() { this.val = 12; }

  ngOnInit() {
  }

}
