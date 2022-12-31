import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../interfaces/message.interface';
import { CsvService } from './csv.service';

@Injectable()
export class MessagesService {
  constructor(
    private readonly csvService : CsvService,
  ) {}

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

  public deleteMessage(id: string): void {
    const result = this.messages.filter((message) => message.id !== id);
    this.messages = result;
    this.subject.next(this.messages);
  }

  public downloadCsv() : void {
    this.csvService.downloadCsv('todo', this.messages);
  }
}
