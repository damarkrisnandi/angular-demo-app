import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  members = [];
  showAdd = false;
  constructor(
    private ps: PostService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.ps.get().subscribe(res => {
      this.members = res;
    })
  }

  afterCloseForm(event) {
    this.showAdd = event;
    this.members = [];
    this.getData();
  }

  deleteMember(id: any, index: number) {
    this.ps.delete(id).subscribe(res => {
      this.members.splice(index, 1);
    });
  }
}
