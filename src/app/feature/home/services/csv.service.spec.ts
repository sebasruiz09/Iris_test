import { TestBed } from '@angular/core/testing';
import { CsvService } from './csv.service';

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
});
