import { Injectable } from '@angular/core';
import { Message } from '../interfaces/message.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MessagesService {
  constructor() {}

  private messages: Message[] = [];

  subject = new BehaviorSubject<Message[]>([]);

  public addMessage(message: string): void {
    const newMessage: Message = {
      id: uuidv4(),
      message,
      date: new Date(),
    };
    this.messages.push(newMessage);
    this.subject.next(this.messages);
  }

  public getMessages(): Observable<Message[]> {
    return this.subject.asObservable();
  }
}
