import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../../models/message";
import {Answer} from "../../models/answer";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageUrl = 'api/messages';
  private answerUrl = 'api/answer';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  public getMessages(): Observable<Message[]>{
    return this.http.get<Message[]>(this.messageUrl)
  };

  public getRandomMessage(): Observable<Answer>{
    return this.http.get<Answer>(this.answerUrl)
  }; //bisogna aggiungere un metodo rand(1-100) alla get;

  public getMessage(message: Message): Observable<Message>{
    return this.http.post<Message>(this.messageUrl, message, this.httpOptions)
  };



}
