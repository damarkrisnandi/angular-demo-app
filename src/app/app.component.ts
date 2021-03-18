import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-blog';
  constructor(
    private ps: PostService
  ) {}

  simulasiBikin() {
    this.ps.postUser1('Test', 'Lorem ipsum dolor sit amet 22 lorem ipsum dolor sit amet 22', 1).subscribe(res => {
      console.log('Post')
    })
  }
}
