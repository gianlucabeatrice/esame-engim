import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactService} from "../../../../services/contact-service/contact.service";
import {Contact} from "../../../../models/contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contact: Contact[]=[];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  public getContacts(): void{
    this.contactService.getContacts().subscribe(data => {
      this.contact = data;
    })
  }
}
