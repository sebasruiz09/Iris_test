import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService],
    });
    service = TestBed.inject(ThemeService);
  });

  it('created Theme Service', () => {
    expect(service).toBeTruthy();
  });

  it('save theme in LocalStorage', () => {
    service.switchTheme();
    expect(localStorage.getItem('theme')).toBeDefined();
  });
});
