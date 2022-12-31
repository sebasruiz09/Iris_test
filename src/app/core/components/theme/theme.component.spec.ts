import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeComponent } from './theme.component';
import { ThemeService } from '../../services/theme.service';

describe('ThemeComponent', () => {
  let component: ThemeComponent;
  let fixture: ComponentFixture<ThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeComponent],
      providers: [ThemeService],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Theme Service', () => {
    expect(component).toBeTruthy();
  });
});
