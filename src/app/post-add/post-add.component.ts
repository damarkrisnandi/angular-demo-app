import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  angForm: FormGroup;
  @Output() close = new EventEmitter<boolean>();
  invalid = false;
  constructor(
    private fb: FormBuilder,
    private ps: PostService,
    private router: Router
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      bio: ['', [Validators.required, Validators.maxLength(20)]],
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  save() {
    if (this.angForm.valid === false) { // ekuivalen dengan !this.angForm.valid
      // stop method
      this.invalid = true;
      return;
    } else {
      this.invalid = false;
    }
    const name = this.angForm.controls.name.value; // ambil data name
    const bio = this.angForm.controls.bio.value; // ambil data bio
    const age = this.angForm.controls.age.value; // ambil data age
    this.ps.addMember2(name, bio, age).subscribe(() => {
      this.close.emit(false);
    })
  }

  cancelButtonClicked() {
    this.close.emit(false);
  }
}
