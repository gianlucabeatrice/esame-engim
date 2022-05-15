import { Component, OnInit } from '@angular/core';
import {Contact} from "../../../../models/contact";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../../../../services/contact-service/contact.service";
import { Location } from '@angular/common';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact!: Contact;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  public getContact(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.getContact(id).subscribe(contact => this.contact = contact);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.contact) {
      this.contactService.updateContact(this.contact)
        .subscribe(() => this.goBack());
    }
  }
}
