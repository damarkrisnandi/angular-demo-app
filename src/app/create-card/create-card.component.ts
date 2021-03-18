import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  @Output() create = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  buttonCreateClicked() {
    this.create.emit(true);
  }

}
