import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-home',
  templateUrl: './player-home.component.html',
  styleUrls: ['./player-home.component.css']
})
export class PlayerHomeComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) {
      this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
