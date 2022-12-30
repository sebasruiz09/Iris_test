import { Component, ViewChild } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../interfaces/message.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private readonly messageService: MessagesService) {
    this.messages$.subscribe({
      next : (message) => {
        console.log(message);
      }
    });
  }
  public messages$: Observable<Message[]> = this.messageService.getMessages();
}
