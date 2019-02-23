import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {

  private data: Object;

  constructor(route: ActivatedRoute) {
    route.data.subscribe(data => this.data = data);
  }

  ngOnInit() {
  }

}
