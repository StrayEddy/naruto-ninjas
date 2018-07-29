import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-skills',
  templateUrl: './player-skills.component.html',
  styleUrls: ['./player-skills.component.css']
})
export class PlayerSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onMoveEnd(id, event) {

    var box_skill_1 = $("#selected_skill_1")[0].getBoundingClientRect();
    var box_skill_2 = $("#selected_skill_2")[0].getBoundingClientRect();
    var box_skill_3 = $("#selected_skill_3")[0].getBoundingClientRect();

    var offset = $("#" + id).offset();

    if this.isInside(offset, box_skill_1) {
      console.log("Skill 1 is now: " + id);
    } else if this.isInside(offset, box_skill_2) {
      console.log("Skill 2 is now: " + id);
    } else if this.isInside(offset, box_skill_3) {
      console.log("Skill 3 is now: " + id);
    }
  }

  isInside(location, box) {
    if location.left < box.right && location.left > box.left
    && location.top < box.bottom && location.top > box.top {
      return true;
    }
    return false;
  }

}
