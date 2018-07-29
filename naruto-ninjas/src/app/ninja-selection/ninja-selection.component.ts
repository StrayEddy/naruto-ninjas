import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninja-selection',
  templateUrl: './ninja-selection.component.html',
  styleUrls: ['./ninja-selection.component.css']
})
export class NinjaSelectionComponent implements OnInit {

  ninjas = [
    {
      id: 1,
      description: "Description 1"
    },
    {
      id: 2,
      description: "Description 2"
    },
    {
      id: 3,
      description: "Description 3"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
