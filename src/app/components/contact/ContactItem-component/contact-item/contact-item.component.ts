import { Component, Input, OnInit } from '@angular/core';
import {Contact} from "../../../../models/contact";
import {ContactService} from "../../../../services/contact-service/contact.service";

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input('item')
  public contact !: Contact;
  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
    

  }

 
}
