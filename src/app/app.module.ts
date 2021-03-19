import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostTemplateComponent } from './post-template/post-template.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponentComponent } from './main-component/main-component.component';
import { PostAddComponent } from './post-add/post-add.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCardComponent } from './create-card/create-card.component';
import { NotificationComponent } from './notification/notification.component';
import { PostEditComponent } from './post-edit/post-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PostTemplateComponent,
    MainComponentComponent,
    PostAddComponent,
    CreateCardComponent,
    NotificationComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
