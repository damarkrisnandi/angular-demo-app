import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://json-server-elastics.herokuapp.com/members';
  constructor(
    private http: HttpClient
  ) { }

  getAllPosts() {
    return this.http.get(this.url + '/posts');
  }

  postUser1(title, body, userId) {
    const obj = {title, body, userId }
    return this.http.post(this.url + '/users/1/posts', obj);
  }

  getAllUsers() {
    return this.http.get(this.url + '/users');
  }

  getUsers(id) {
    return this.http.get(this.url + '/users/' + id);
  }

  get(): any {
    return this.http.get(this.url);
  }

  addMember(name: string, bio: string, age: number) {
    const obj = { name, bio, age };
    return this.http.post(this.url, obj).subscribe((res: any) => console.log('Post Sukses'));
  }

  // addMember tanpa subscribe
  addMember2(name: string, bio: string, age: number) {
    const obj = { name, bio, age };
    return this.http.post(this.url, obj)
    // .subscribe((res: any) => console.log('Post Sukses'));
  }

  delete(id: any) {
    // `${this.url}/${id}` = https://json-server-elastics.herokuapp.com/members/1
    return this.http.delete(`${this.url}/${id}`)
    // .subscribe((res: any) => console.log('Delete Sukses'), (error: any) => console.log(error))
  }

  getById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(name: string, bio: string, age: number, id: any) {
    const obj = { name, bio, age };
    return this.http.put(`${this.url}/${id}`, obj);
  }
}
