import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-template',
  templateUrl: './post-template.component.html',
  styleUrls: ['./post-template.component.css']
})
export class PostTemplateComponent implements OnInit {
  @Input() content = '';
  @Input() name = '';
  @Input() id = 0;
  @Input() age = 0;
  @Output() delete = new EventEmitter<boolean>();
  @Output() edit = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  deleteBtnClicked() {
    this.delete.emit(true);
  }

  editBtnClicked() {
    this.edit.emit(true);
  }

}
