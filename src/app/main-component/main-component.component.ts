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
  showEdit = false;
  dataEdit = null;
  message = '';
  showNotif = false;
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
    this.showEdit = event;
  }

  afterSaveForm(event) {
    this.showAdd = false;
    this.showNotif = true;
    this.message = 'Member Berhasil Ditambahkan!'
    this.members = [];
    this.getData();

    // notif hilang setelah 3 detik
    setTimeout(() => {
      this.showNotif = false;
    }, 3000);
  }

  afterEditForm(event) {
    this.showEdit = false;
    this.showNotif = true;
    this.message = `Member ID ${this.dataEdit.id} Berhasil Diupdate!`
    this.members = [];
    this.getData();

    // notif hilang setelah 3 detik
    setTimeout(() => {
      this.showNotif = false;
      this.dataEdit = null;
    }, 3000);
  }

  deleteMember(id: any, index: number) {
    this.ps.delete(id).subscribe(res => {
      this.members.splice(index, 1);

      this.showNotif = true;
      this.message = `Member ID ${id} Berhasil dihapus!`
      // notif hilang setelah 3 detik
      setTimeout(() => {
        this.showNotif = false;
      }, 3000);
    });
  }

  editClick(member) {
    this.dataEdit = member;
    this.showEdit = true;
  }
}
