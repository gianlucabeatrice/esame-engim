import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

import { environment } from 'src/environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service/in-memory-data.service';
import { MenuComponent } from './components/menu/menu.component';
import { ContactListComponent } from './components/contact/ContactList-component/contact-list/contact-list.component';
import { ContactItemComponent } from './components/contact/ContactItem-component/contact-item/contact-item.component';
import { ContactDetailsComponent } from './components/contact/ContactDetails-component/contact-details/contact-details.component';
import { MessageDetailsComponent } from './components/message/MessageDetails-component/message-details/message-details.component';
import { MessageItemComponent } from './components/message/MessageItem-component/message-item/message-item.component';
import { MessageListComponent } from './components/message/MessageList-component/message-list/message-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactDetailsComponent,
    MessageDetailsComponent,
    MessageItemComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false, delay: 1000}
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
