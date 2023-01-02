import { TestBed } from '@angular/core/testing';
import { CsvService } from './csv.service';
import { Message } from '../interfaces/message.interface';
import { v4 as uuidv4 } from 'uuid';

describe('CsvService', () => {
  let service: CsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsvService],
    });
    service = TestBed.inject(CsvService);
  });

  it('created Csv Service', () => {
    expect(service).toBeTruthy();
  });

  it('return undefined with no file rows', () => {
    const response = service.downloadCsv('test', []);
    expect(response).toBeUndefined();
  });

  it('convert messages array in Csv  Format'),
    () => {
      const seed: Message[] = [
        {
          id: '3749c6b4-3b96-471d-a32f-65275ee10060',
          message: 'message test',
          date: '1/1/2023, 20:22:10',
        },
      ];
      const expected : string = "id,message,date 3749c6b4-3b96-471d-a32f-65275ee10060,dsdsd,1/1/2023, 20:24:22"

      const result = service.convertToCsv('est', seed);
      expect(result).toEqual(expected);
    };
});
