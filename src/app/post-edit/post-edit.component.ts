import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  angForm: FormGroup;
  @Output() close = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<boolean>();
  @Input() member = null;
  invalid = false;
  constructor(
    private fb: FormBuilder,
    private ps: PostService,
    private router: Router
  ) {
    this.createForm();
   }

  ngOnInit() {
    if (this.member) {
      this.inputValue();
    }
  }

  inputValue() {
    // patchValue digunakan untuk set nilai pada FormGroup
    this.angForm.patchValue({
      name: this.member.name,
      bio: this.member.bio,
      age: this.member.age
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      bio: ['', [Validators.required, Validators.maxLength(140)]],
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  saveBtnClicked() {
    if (!this.angForm.valid) {
      // stop method
      this.invalid = true;
      return;
    } else {
      this.invalid = false;
    }
    const name = this.angForm.controls.name.value; // ambil data name
    const bio = this.angForm.controls.bio.value; // ambil data bio
    const age = this.angForm.controls.age.value; // ambil data age
    this.ps.update(name, bio, age, this.member.id).subscribe(() => {
      this.save.emit(true);
      this.close.emit(false);
    })
  }

  cancelButtonClicked() {
    this.close.emit(false);
  }
}
