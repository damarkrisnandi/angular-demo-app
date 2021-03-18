import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { PostAddComponent } from './post-add/post-add.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
