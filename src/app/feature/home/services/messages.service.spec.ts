import { TestBed } from '@angular/core/testing';
import { MessagesService } from './messages.service';
import { CsvService } from './csv.service';

describe('MessagesService', async () => {
  let service: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsvService, MessagesService],
    });
    service = TestBed.inject(MessagesService);
  });

  it('created Message Service', () => {
    expect(service).toBeTruthy();
  });

  it('create Message', () => {
    service.addMessage('new todo');
    const data = service.getTestMessages();
    expect(data.length).toEqual(1);
  });
});
