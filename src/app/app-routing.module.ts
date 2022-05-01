import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";
import {ContactListComponent} from "./components/contact/ContactList-component/contact-list/contact-list.component";
import {
  ContactDetailsComponent
} from "./components/contact/ContactDetails-component/contact-details/contact-details.component";
import {MessageListComponent} from "./components/message/MessageList-component/message-list/message-list.component";

const routes: Routes = [
  {path:'', redirectTo: '/menu', pathMatch: 'full'},
  {path:'menu', component: MenuComponent},
  {path:'contacts',component: ContactListComponent},
  {path:'contact/:id', component: ContactDetailsComponent},
  {path:'whatsapp', component: MessageListComponent},
  {path:'whatsapp/:userId', component: ContactDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
