import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Contact} from "../../models/contact";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactUrl = 'api/contacts';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.contactUrl)
  };

  public getContact(id: number): Observable<Contact>{
    return this.http.get<Contact>(this.contactUrl + '/' + id)
  };

  public updateContact(contact: Contact): Observable<Contact>{
    return this.http.put<Contact>(this.contactUrl, contact, this.httpOptions)
  };
}
