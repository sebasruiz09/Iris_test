import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../interfaces/message.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() message: Message | any = "";
  @Output() onDelete = new EventEmitter<Message>();
  @Output() onSelect = new EventEmitter<Message & { selected: boolean }>();

  selected: boolean = false;

  deleteItem() {
    this.onDelete.emit(this.message);
  }

  checkItem(event: Event) {
    event.preventDefault();
    this.selected = !this.selected;
    this.onSelect.emit({
      ...this.message,
      selected: this.selected,
    });
  }
}
