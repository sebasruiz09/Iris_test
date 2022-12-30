import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../interfaces/message.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() message!: Message;
  @Output() delete = new EventEmitter<Message>();

  deleteItem() {
    this.delete.emit(this.message);
  }
}
