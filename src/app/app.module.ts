import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchComponent } from './search/search.component';
import { MessagesComponent } from './messages/messages.component';
import { GroupsComponent } from './groups/groups.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
 
    RegisterComponent,
    ProfileComponent,
    FriendsListComponent,
    NotificationsComponent,
    SearchComponent,
    MessagesComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
