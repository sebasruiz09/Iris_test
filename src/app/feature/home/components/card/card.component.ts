import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { Message } from '../../interfaces/message.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() message: Message | any = '';

  @Output() Delete = new EventEmitter<Message>();

  @Output() Select = new EventEmitter<Message & { selected: boolean }>();

  selected: boolean = false;

  deleteItem() {
    this.Delete.emit(this.message);
  }

  checkItem(event: Event) {
    event.preventDefault();
    this.selected = !this.selected;
    this.Select.emit({
      ...this.message,
      selected: this.selected,
    });
  }
}
