import { TestBed } from '@angular/core/testing';
import { MessagesService } from './messages.service';
import { CsvService } from './csv.service';

describe('MessagesService', () => {
  let service: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsvService, MessagesService],
    });
    service = TestBed.inject(MessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
