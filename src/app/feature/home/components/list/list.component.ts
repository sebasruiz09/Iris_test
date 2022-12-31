import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../interfaces/message.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private readonly messageService: MessagesService) {}

  public messages$: Observable<Message[]> = this.messageService.getMessages();

  private checked: (Message & { selected: boolean })[] = [];

  public onCardDelete(message: Message) {
    this.messageService.deleteMessage(message.id);
  }

  public selectCards(message: Message & { selected: boolean }): void {
    if (message.selected) this.checked.push(message);
    else this.checked = this.checked.filter((m) => m.id !== message.id);
  }

  public deleteCards(): void {
    this.checked.forEach((message) => {
      this.messageService.deleteMessage(message.id);
    });
    this.checked = [];
  }

  public downloadCsv(): void {
    this.messageService.downloadCsv();
  }
}
